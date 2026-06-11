import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INFO_FILE = path.join(__dirname, '..', 'calibre-web_info.txt');
const OUTPUT_JSON = path.join(__dirname, '..', 'src', 'data', 'books.json');
const COVERS_DIR = path.join(__dirname, '..', 'public', 'covers');

async function main() {
  // Try to get config from environment variables first (GitHub Actions)
  const config = {
    URL: process.env.CALIBRE_URL,
    Shelf: process.env.CALIBRE_SHELF_URL,
    Username: process.env.CALIBRE_USERNAME,
    Password: process.env.CALIBRE_PASSWORD
  };

  const hasEnvConfig = config.URL && config.Shelf && config.Username && config.Password;

  if (!hasEnvConfig) {
    // Fallback to local file
    try {
      const info = await fs.readFile(INFO_FILE, 'utf-8');
      const lines = info.split('\n');
      lines.forEach(line => {
        const [key, ...rest] = line.split(': ');
        if (key && rest.length > 0) {
          config[key.trim()] = rest.join(': ').trim();
        }
      });
    } catch (err) {
      console.warn(`[Sync] No environment variables and calibre-web_info.txt not found. Skipping sync.`);
      return;
    }
  }

  const { URL: configUrl, Shelf, Username, Password } = config;
  
  if (!configUrl || !Shelf || !Username || !Password) {
    console.warn(`[Sync] Incomplete configuration. Skipping sync.`);
    return;
  }
  
  // Convert shelf URL to OPDS URL if it's not already
  // Shelf URL: https://diogenes3575.oasis.usbx.me/calibre-web/shelf/3
  // OPDS URL: https://diogenes3575.oasis.usbx.me/calibre-web/opds/shelf/3
  let opdsUrl = Shelf;
  if (Shelf.includes('/shelf/') && !Shelf.includes('/opds/')) {
    opdsUrl = Shelf.replace('/shelf/', '/opds/shelf/');
  }

  console.log(`Fetching from ${opdsUrl}...`);

  const auth = Buffer.from(`${Username}:${Password}`).toString('base64');
  const response = await fetch(opdsUrl, {
    headers: {
      'Authorization': `Basic ${auth}`
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch OPDS: ${response.statusText}`);
  }

  const xml = await response.text();
  
  // Simple XML parsing for entries
  const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
  const entries = xml.match(entryRegex) || [];

  const books = [];
  const urlObj = new URL(configUrl);
  const origin = urlObj.origin;
  for (const entry of entries) {
    const title = entry.match(/<title>([\s\S]*?)<\/title>/)?.[1];
    const authorMatches = [...entry.matchAll(/<author>[\s\S]*?<name>([\s\S]*?)<\/name>[\s\S]*?<\/author>/g)];
    const authors = authorMatches.map(m => m[1]);
    
    // Find the link with the image rel
    const linkMatches = [...entry.matchAll(/<link([\s\S]*?)\/?>/g)];
    const imageLinkMatch = linkMatches.find(m => m[1].includes('rel="http://opds-spec.org/image"'));
    const coverUrl = imageLinkMatch?.[1].match(/href="([^"]+)"/)?.[1];
    
    const id = coverUrl?.match(/\/cover\/(\d+)/)?.[1];

    if (title && authors.length > 0 && coverUrl) {
      books.push({
        id,
        title,
        authors,
        author: authors[0], // Primary author for sorting
        coverUrl: coverUrl.startsWith('http') ? coverUrl : origin + coverUrl
      });
    }
  }

  console.log(`Found ${books.length} books. Downloading covers...`);

  // Ensure covers directory exists
  await fs.mkdir(COVERS_DIR, { recursive: true });

  const processedBooks = [];

  for (const book of books) {
    const ext = '.jpg';
    const localCoverPath = `/covers/${book.id}${ext}`;
    const fullLocalPath = path.join(COVERS_DIR, `${book.id}${ext}`);

    // Check if cover already exists to skip download
    try {
      await fs.access(fullLocalPath);
      // console.log(`Cover for "${book.title}" already exists, skipping.`);
    } catch {
      console.log(`Downloading cover for "${book.title}"...`);
      const coverRes = await fetch(book.coverUrl, {
        headers: {
          'Authorization': `Basic ${auth}`
        }
      });

      if (coverRes.ok) {
        const buffer = await coverRes.arrayBuffer();
        await fs.writeFile(fullLocalPath, Buffer.from(buffer));
      } else {
        console.warn(`Failed to download cover for ${book.title}: ${coverRes.statusText}`);
        continue;
      }
    }

    processedBooks.push({
      title: book.title,
      authors: book.authors,
      cover: localCoverPath,
      authorSort: getAuthorSortName(book.author)
    });
  }

  // Sort by author last name
  processedBooks.sort((a, b) => a.authorSort.localeCompare(b.authorSort));

  await fs.mkdir(path.dirname(OUTPUT_JSON), { recursive: true });
  await fs.writeFile(OUTPUT_JSON, JSON.stringify(processedBooks, null, 2));
  console.log(`Saved ${processedBooks.length} books to ${OUTPUT_JSON}`);
}

function getAuthorSortName(name) {
  const parts = name.trim().split(/\s+/);
  if (parts.length <= 1) return name;
  // Handle some common suffixes or multi-part last names if necessary
  // For now, just the last part
  return parts[parts.length - 1];
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
