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
