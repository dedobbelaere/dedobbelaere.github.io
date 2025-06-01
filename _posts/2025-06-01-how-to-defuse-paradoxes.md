---
layout: post
title: How to Defuse Paradoxes
date: 2025-06-01 10:00:00 -0400
---

***

*In today's blog I'm experimenting with doing some public philosophy. I'll be giving a brief introduction into one of my favorite topics in philosophy: paradoxes. In doing so, I'll cover a basic framework for defusing with paradoxes, apply that framework to an instance of a Benardete paradox, and explain how paradoxes have broader philosophical importance than just being fun puzzles.*

***

<a title="Paradox, Colorado - wooden storefront in 2010"  href="https://commons.wikimedia.org/wiki/File:Paradox,_Colorado_-_wooden_storefront_in_2010.jpg"><img width="100%" alt="Paradox, Colorado - wooden storefront in 2010" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Paradox%2C_Colorado_-_wooden_storefront_in_2010.jpg/1024px-Paradox%2C_Colorado_-_wooden_storefront_in_2010.jpg?20211017154808"></a>

### The Problem

Suppose you're about to kick a ball into a soccer goal. Directly in front of the goal, there is a wall, which we'll call $W_1$. Halfway between midfield and $W_1$ is a second wall, $W_2$. Halfway between midfield and $W_2$ is a third wall, $W_3$, and so on *ad infinitum*. Thus for any wall $W_n$, there is a wall $W_{n+1}$, which is halfway between $W_n$ and midfield, where $n$ is some natural number. Note that this means there are countably infinite walls between the goal and midfield, which get closer and closer together as $n$ increases. We'll assume the walls get infinitely thin as $n$ increases so that infinitely many walls can fit in a finite amount of space.

It should be clear that if there are infinite walls between you and the goal, the ball is not going to go into the goal. But which wall is going to stop the ball? $W_1$ can't stop the ball, because $W_2$ would stop the ball before it could reach $W_1$. Similarly, $W_2$ can't stop the ball because $W_3$ would stop the ball before it could reach $W_2$. This reasoning generalizes to the broader claim that **no** wall $W_n$ can stop the ball, because $W_{n+1}$ would stop the ball before it could reach $W_n$. But if none of the walls stop the ball, then the ball must go into the goal. But the ball can't go into the goal, since there are infinite walls between you and the goal. But none of the walls...and so on and so forth.

This is one form of a Benardete paradox, named after Syracuse philosophy professor Jose Benardete. The general form of this sort of paradox comes from Benardete's 1964 book *Infinity: An Essay In Metaphysics*. The version I've given here originates (as far as I have been able to tell) from Bruno Whittle, one of my undergraduate professors at the University of Wisconsin.

Naming the paradox is a start, but how do we defuse it? There's no trick to this question as there would be in a riddle or a brain teaser. The walls are solid and immovable. You can't kick the ball over the walls or around them. The ball is kicked straight at the infinite walls. We've stumbled on a conceptual problem with no clear path to resolution. 

Fortunately, philosophers have developed a lot of conceptual tools for thinking about paradoxes. Some of these tools are formal, like first-order logic and the many modifications of it. Here, I'll give a less formal framework designed for those without a significant background in philosophy or mathematical logic that comes from R.M. Sainsbury's wonderful book *Paradoxes*. 

<a title="Samo Kupper, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:LargeTribarGotschuchenAustria.JPG"><img width="100%" alt="LargeTribarGotschuchenAustria" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/LargeTribarGotschuchenAustria.JPG/1024px-LargeTribarGotschuchenAustria.JPG?20130502065838"></a>

### Sainsbury's Strategies

Let's start by defining the boundaries of our inquiry. Sainsbury defines a paradox as "an apparently unacceptable conclusion derived by apparently acceptable reasoning from apparently acceptable premises." "Apparently" is doing a lot of work here: if we're going to defuse a paradox, something will have to give, which means we must be wrong about *something* in the paradox as it is given. Either our conclusion may not actually be unacceptable, something has gone wrong in our reasoning, or there is a flaw in at least one of our premises. Accordingly, our three main strategies for defusing paradoxes are accepting the conclusion, rejecting the reasoning, and rejecting the premises. 

*Accepting the Conclusion*\
Accepting the conclusion is often the most painful strategy to take, since it is the conclusion in a paradoxical chain of reasoning that we find so rationally repulsive. Nonetheless, sometimes we must trust where the argumentation leads, and accept that the world is stranger than we thought. This is the solution that some philosophers accept in response to the Liar sentence. The Liar states "this sentence is false." If we suppose the Liar sentence is true, then it must be the case that "this sentence is false," and so the Liar must be false, which seems to be a contradiction. If we suppose the Liar is false, then it must not be the case that "this sentence is false," and so the Liar must be true, which seems to be a contradiction. Classical logic says that sentences must be only one of either true or false. Some philosophers reject classical logic and accept that the Liar is both true and false, thereby accepting the seemingly contradictory conclusion the Liar presents.

*Rejecting the Reasoning*\
Supposing our premises are rock solid and the conclusion is wholly unacceptable, we may instead deny that the conclusion logically follows from the premises. For an example, consider the Sorites paradox. One grain of sand is certainly not a heap. If one grain of sand is not a heap, then two grains of sand is not a heap. If two grains of sand is not a heap, then three grains of sand is not a heap. We can continue this chain of reasoning as long as we want. Eventually, we will reach some very large number of grains of sand, and conclude that ten thousand grains of sand is not a heap. But ten thousand grains of sand certainly *is* a heap. We don't want to say that one grain of sand is a heap, and we can't accept that ten thousand grains is not a heap. Instead, we might reject the reasoning, and argue that it does not logically follow from the fact that $n$ grains of sand is not a heap that $n+1$ grains of sand is not a heap. Thus, we couldn't follow our original chain of reasoning from the premise that one grain of sand is not a heap to the (presumably false) conclusion that ten thousand grains of rice is not a heap.

*Rejecting the Premises*\
Sometimes something goes wrong right from the start, in which case one or more of our premises needs to be rejected. Let's consider the Sorites paradox again. When rejecting the reasoning above, all we do is reject that "$n+1$ grains of sand is not a heap" logically follows from premises of the form "$n$ grains of sand is not a heap" and "if $n$ grains of sand is not a heap then $n+1$ grains of sand is not a heap." We still accept that all of those premises individually are true. But there is good reason to be cautious about rejecting this reasoning. The general argument form "If A then B, A; Therefore, B" is known to philosophers and logicians as "*modus ponens*" and has been widely accepted as valid reasoning since the ancient Greeks. To reject *modus ponens* is an extremely high price to pay to defuse a paradox. 

Instead, we might accept the reasoning but reject one of our premises. We have this whole series of premises of the form "if $n$ grains of sand is not a heap, then $n+1$ grains of sand is not a heap." We don't want to reject all of them, since it seems sound to claim "if one grain of sand is not a heap then two grains of sand is not a heap" or "if two grains of sand are not a heap then three grains of sand are not a heap." We might, however, reject one of the later premises dealing with larger quantities of sand, like "if 3,765 grains of sand are not a heap then 3,766 grains of sand are not a heap." In effect, we would be setting the cutoff for heap and non-heap of sand at 3,765 grains of sand. Many philosophers *do* take this approach, and argue that there must be such a cutoff between heap-ness and non-heap-ness, but that such a cutoff is in principle unknowable. This is known as an epistemicist response to the Sorites paradox.

*A Secret Fourth Thing?*\
We might also employ a fourth strategy: rejecting the concept altogether. Rejecting the concept is something like rejecting that there is anything to talk about, on grounds that the setup to the paradox doesn't actually involve anything substantive or metaphysically real. Consider again the Liar sentence. In philosophy we make a distinction between *utterances* and *propositions*. An utterance is just some way of expressing a language. This includes emails, texts, vocalizations, any way that you get language out into the world. Propositions are the underlying meaning of an utterance. For example "snow is white" and "schnee ist weiss" are different utterances, but they have the same underlying proposition: snow is white.

Some philosophers don't think that the utterance "This sentence is false" has an underlying proposition. In other words, though there is a Liar sentence there is no Liar proposition. There's nothing out there in the world that seems to be the appropriate referent of such a self-referential and seemingly paradoxical utterance like the Liar. This amounts to rejecting the concept of the Liar paradox: even though we can make an utterance that seems paradoxical, there isn't actually anything *there* to cause us some sort of conceptual difficulty. This strategy is tricky, and is often hard to distinguish from rejecting the premises. It is important to have some sort of background theory of what the world is like or how language or reference works in order to back up a rejecting of the concept. 

<a title="Paradox Cafe, Belmont, Portland, OR 2012" href="https://commons.wikimedia.org/wiki/File:Paradox_Cafe,_Belmont,_Portland,_OR_2012.JPG"><img width="100%" alt="Paradox Cafe, Belmont, Portland, OR 2012" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Paradox_Cafe%2C_Belmont%2C_Portland%2C_OR_2012.JPG/1024px-Paradox_Cafe%2C_Belmont%2C_Portland%2C_OR_2012.JPG?20120206000845"></a>

### Defusing Benardete Paradoxes

I must, at this point, disappoint my readers. I don't have a perfect solution to Benardete paradoxes ready to give you. There is a great deal of philosophical literature about these paradoxes, as much is written knocking down solutions as there is giving them. Instead, I'll give an example defusal of the paradox using the strategy of rejecting the premises.

The premises in the earlier setup to the paradox are as follows:

1. There is a regulation soccer field with both a goal and a ball, and the ball is on the opposite side of the field from the goal
2. There is a wall $W_1$ directly in front of the goal
3. For each wall $W_n$ there is another wall $W_{n+1}$ halfway between $W_n$ and midfield where $n$ is some natural number

We can't reject the first premise, since it would be difficult to deny that soccer fields with a ball and a goal are possible entities. For a similar reason, we also shouldn't deny the second premise, since it is entirely possible that someone could build one wall in front of a soccer goal. The third premise doesn't seem as solid. The third premise essentially states that there are infinite walls between $W_1$ and midfield. This would require that we could fit infinite walls in finite space. Earlier we made the assumption that the walls get thinner and thinner as $n$ gets larger so that the setup isn't immediately implausible, but we still have reason to think that we couldn't fit infinite walls into finite space.

Even supposing the walls get thinner and thinner as $n$ gets bigger, it seems implausible that the walls could get infinitely thin. Our best physical theories have smallest particles, so it seems we should think there is such a thing as a smallest wall. Even if we were to admit that our best physical theories are incomplete and that it's possible for there to be infinitely thin matter, we still might think that infinite walls in finite space is something metaphysically unsavory. It seems from our setup above that allowing for the possibility of infinite objects in finite space leads to a contradiction, the other premises needed to lead to that contradiction are rock solid, so the one we should give up is the one that involves this weird infinite stuff.

Of course, reasonable objections can be raised to this strategy. For one thing, there are setups to this paradox that rely on space being not infinitely divisible, but infinitely large. There are also setups which don't rely on space at all, but instead on time being either infinitely divisible or infinitely long. Are we then committed to both time and space being finitely divisible and finitely large? This seems to be an extreme set of commitments to make about the makeup of the universe based on this one paradox.

The existence of these other setups seems to point us towards the idea that by rejecting the possibility of infinitely divisible space, we haven't really defused the underlying problem in the paradox. Think again about our initial setup. The real issue we have is that we know one of the walls has to stop the ball before it gets into the goal, and we know that wall has to be the closest wall to midfield, but *there is no closest wall to midfield*. For every wall $W_n$ there is another wall $W_{n+1}$ closer to midfield. It seems the underlying problem is that we are being asked to identify the largest natural number $n$, but *there is no largest natural number $n$*. 

If we accept that the setup to the paradox is logically possible, then we have to say something about what happens when the ball is kicked towards this infinite series of walls. We can't say which wall is the one to stop the ball, so it seems we have to say something else. We might say that in all the possible worlds where the ball is kicked at the wall, some coincidence (the kicker trips, a breeze blows the ball away, etc.) stops the ball from ever reaching midfield, thus avoiding any paradoxical contradictions. We might say that the whole collection of walls *jointly* stops the ball from moving past midfield, without committing to any one particular wall being the one that stops it. There are many different ways one might try to defuse the paradox *without* saying anything about time and space.

If you have a solution, please send it to me! I find that people who are just learning this stuff for the first time often have extremely creative solutions, plus hearing your responses will give me an idea of how well I've taught this material.

<a title="Anders Sandberg from Oxford, UK, CC BY 2.0 &lt;https://creativecommons.org/licenses/by/2.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Logic_Lane.jpg"><img width="100%" alt="Logic Lane" src="https://upload.wikimedia.org/wikipedia/commons/7/75/Logic_Lane.jpg?20140721204615"></a>
### Why Study This?

I've mentioned above that a lot has been published on Benardete paradoxes. You might be thinking "Wow, that sounds like a massive waste of intellectual capital on trivial problems." In defense of philosophers, this is the tip of the tip of the iceberg, and ignores a great deal of the underlying logic that makes work on paradoxes so productive. Here's a taste of some of the underlying math behind my current research project on Benardete paradoxes:

$$O=_{df}\bigg\{r\in\mathbb{R}:(\forall n\in\mathbb{N})\bigg(n\in B\rightarrow r<\frac{1}{2^n}\bigg)\bigg\}$$
$$B=_{df}\bigg\{n\in\mathbb{N}:(\forall r\in\mathbb{R})\bigg(r<\frac{1}{2^n}\rightarrow r\in O\bigg)\bigg\}$$

If you're interested in what this math is modelling, you can find the original paper [here](https://www.jstor.org/stable/45212283). There is real formal rigor behind many paradoxes. Russell's paradox (Does the class which contains all classes that do not contain themselves, contain itself?) led to the development of Zermelo-Fraenkel set theory, which underlies just about all contemporary mathematics. The Liar paradox has led to the development of numerous different logics that are applied in fields like math, computer science, and game theory.

The value in paradoxes is not, and should not be, the enjoyment one gets in chewing on a tough problem indefinitely. The value is that something is revealed to be conceptually wrong with the way that we model the world. Each strategy for defusing paradoxes above represents some way of righting our conceptual models so that we can better understand the underlying structure of reality. This is, in one way or another, the ultimate goal of all philosophy: to better understand the world.

***

If you found this piece interesting, you have any questions, or, as mentioned earlier, proposed solutions, please let me know! My goal in any writing is that it is worth reading, and hearing from readers like you helps me to know what is and isn't worth the read.

***