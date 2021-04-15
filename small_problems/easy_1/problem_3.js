/*
understand the Problem
  INPUT AND OUTPUT
    Input:
      If we write this as a funciton the input could be considered
      the start number and the end number.
    Output:
      Log of all even numbers from the input.

  MAKE THE REQUIREMENTS EXPLICIT
    The term inclusive means including the first and last number provided
    as input.

  IDENTIFY THE RULES
    Our rules are that we're logging ONLY the even numbers.
    We're not returning any value
    Each number should be on a separate line

  MENTAL MODEL
    Given a starting number 1 and an ending number 99, log to the console
    all the even numbers that occur in that range.

Examples / test cases
  Input:
    1, 99
  Output:
    2
    4
    6
    8
    ...

  Data structure
    This again doesn't really need a data structure. We're able to take an
    input and produce an output without the step of using a data structure.

  Algorithm
    For each number greater than 0 and less than 100:
      check if the number is even
        if so log the number
      if not continue
*/

let displayEvenNums = (start, stop) => {
  let evenCounter = Math.abs(start) % 2 !== 0 ? start + 1 : start;
  for (evenCounter; evenCounter <= stop; evenCounter += 2) {
    console.log(evenCounter);
  }
};

displayEvenNums(1, 99);