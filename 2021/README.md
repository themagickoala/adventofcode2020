# Advent of Code 2021 🎄

## Language

I have 2 kids, a ton of work, and a pandemic to fight still, so hello JavaScript old friend!

## Challenges

### --- Day 1: Sonar Sweep ---

Honestly, one of my favourite parts of AoC is the story, so it was nice to jump back in to this one with its underwater theme.
If we can expect to stay in the submarine for a while then I expect to see some pathfinding and grids in our future! As for today's
puzzle, part 1 was pretty trivial to iterate over the array and compare with the previous value. One thing I noticed a lot on the
solution megathread which was also what I started trying to do, was actually summing the values for part 2 to get the window sum.
In reality, you can just compare with the value 3 back instead of 1 back to get the same result, which I thought was a nice little
optimisation with which to kick off this year's challenges!

### --- Day 2: Dive! ---

This one was fairly straightforward, so not a lot of write-up here, other than the fact that I enjoyed being able to solve day 1
with both parts using a single array function (in filter). Today I managed to do the same with reduce, which I thought was cool.
I did trip over the classic "not converting strings to numbers" problem though!