# Advent of Code 2020 🎄

## Language

I ummed and ahhed over whether to try and learn a new language for AoC this year, but it's 2020 and I've got enough on my plate, so
JavaScript it is!

## Challenges

### --- Day 1: Report Repair ---

This was a fun little challenge about how to iterate twice over an array most efficiently. I opted to do a look-behind as I iterated,
which was probably less efficient than doing a look-ahead. But hey, it's day 1, we'll ease into it!

### --- Day 2: Password Philosophy ---

Fun with regular expressions! I originally planned to use one regex to pull out the values and then another to match against the
password, but in the end I think the second use would have been overkill - functional string manipulation worked just fine. The
second part was actually easier than the first, but watch out for the array index! It took me far too long to correct that!

### --- Day 3: Toboggan Trajectory ---

It's always nice when your first answers are correct! The important thing that I realised pretty quickly was that you don't need to
duplicate the map to the right - you can just use the modulo (%) operator. From there I started trying to write a for loop but I
decided to see if I could use the functional style easily - Array.reduce is pretty perfect for summing over a for loop, and it worked
like a charm.

### --- Day 4: Passport Processing ---

Another pretty simple challenge based around string processing. The `cid` field seemed completely irrelevant here and I'm not sure
why it was included in the puzzle - maybe for story reasons? This one was essentially just "do string processing but more of it" with
some regular expressions thrown in and I think the main challenge was keeping the code concise. My end result probably isn't overly
readable but I was trying to keep to functional solutions for array processing again.

### --- Day 5: Binary Boarding ---

No code file today as this one was done manually from my mobile phone. Instantly twigged that the FBLR system converted directly to
binary, so I pasted the input into a string replacer tool to do the conversion, then into a string sorting tool to find the max. Part
2 was just a case of skimming the last digits in the list to find consecutive 1s or 0s, pointing to the missing seat number.

Doing something like this on a mobile phone was very cumbersome, but for a lot of people, a mobile phone is all they have. Please
consider supporting organisations that aim to get laptops to those who can't get them for themselves, like [devcareer.io](devcareer.io).

### --- Day 6: Custom Customs ---

This was actually a really nice intro to JavaScript Sets for me, which helped me feel like I learned something. I also took full
advantage of this bein JavaScript and not TypeScript, and the fact that both Array and String have a `length` property, so that if my
reduce function (which didn't take a second argument) only processed one element, it'd give the same result. Neat puzzle!

### --- Day 7: Handy Haversacks ---

This reminded me of the puzzle that stopped my 2018 run! Definitely a puzzle about data structures, this one being a tree. Rather
than building the tree in full, I built a map through which the tree could be navigated. I struggled a bit with part 1, getting an
answer that was too high, but took the important lesson of using the sample inputs to test your code! I realised that I had
duplicate colours in my result, so switched from just counting to building an array of parents and then using a Set (thanks day 6)
to get the unique colours from that. Part 2 was a lot easier once this was in place.

### --- Day 8: Handheld Halting ---

Hello again runnable programs! AoC 2019 included several puzzles which got you to continuously improve an Intcode compiler, and this
was definitely reminiscent of that. Honestly that was a really fun part of last year, and I hope we get to play with this type of
program again this year. The crux of this challenge was managing a pointer and tracking previous visits to instructions, as well as
making sure your code was refactorable to be able to run multiple different programs. If we do meet this kind of program again, the
runProgram function should be able to be pulled out pretty easily.

### --- Day 9: Encoding Error ---

A lesson in reading the instructions! Part 1 was relatively simple. I expect there's a quicker option than iterating twice through
the previous 25 numbers to check all the sums but given that you only had to hit 25 (and not scale it), it seems fine. As for part 2,
mistake number 1 was starting from the beginning. The numbers trend upwards as you continue, so if you start summing from the first
index, you'll be repeatedly adding hundreds of numbers before you realise your sum is higher than the answer. Once I realised this, I
refactored to go end -> start. This gave me the right range, but I was adding the first and last numbers in that range, rather than
the highest and lowest. The puzzles are definitely starting to get more difficult in terms of stack size and/or number of operations!

### --- Day 10: Adapter Array ---

I needed a bit of help with this one. Part 1 was ridiculously simple and just required sorting a list of numbers and counting the
gaps between them. Part 2 ramped up the difficulty significantly! I took a look at the megathread on the subreddit for the day and
saw terms like dynamic programming and chains. I followed along with another solution and realised the efficient way of calculating
this was to do so recursively. The number of possible paths from one node is the sum of possible paths from the nodes it can reach.
Once you realise that some of these will be calculated multiple times you can add a cache to look up path lengths from already
calculated nodes.