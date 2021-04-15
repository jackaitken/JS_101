/*
PEDAC
First we need to process the problem
  understand the Problem (P)
    Identify expected input and output
    Make the requirements explicit
    Identify the rules
  Examples/test cases (E)
  Data structure (D)
  Algorithm (A)

Then we can Code with intent
  implement our algorithm (C)

__________________________________

expected input and output:

Input:
  no input
Outout:
  Output all odd integers from 1-99 inclusive.


make the requirements explicit

  There shouldn't be a return value. We're just logging odd numbers
  to the console.

  inclusive in this case means including numbers 1 and 99.

identify the rules
  we need to log all odd numbers from 1 - 99 and we need to include and 99
  in our printing.

  each number should be output on each line.

Examples and test cases
    The example is really just our finished program but here's what it looks 
    like
      1
      3
      5
      7
      ...
      99

Data Structure
  Again we don't really need a data structure. We just need a loop. Then we'll
  log each number that passes the condition.

Algorithm
  1. For each number greater than 0 and less than 100:
      Log the number
      increase the number by 2
*/

let displayNumbers = (start, stop) => {
  for (let i = start; i <= stop; i += 2) {
    console.log(i);
  }
};


let displayNumbers2 = (start, stop) => {
  let displayCounter = start;
  while (displayCounter <= stop) {
    if (displayCounter % 2 !== 0) console.log(displayCounter);
    displayCounter += 1;
  }
};

displayNumbers2(1, 99);