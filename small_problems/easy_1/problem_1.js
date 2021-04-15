/*
PEDAC

PROCESS THE PROBLEM (P)
  Understand the Problem
    Identify the expected input and output
    Make the requirements explicit
    Identify the rules
    Create a mental model

  Examples/Test Cases (E)
    Validate my understanding of the problem

  Data Structure (D)
    How should we work with the input data and what data structure
    can we choose to help us with our output

  Algorithm (A)
    Implementation of the algorithm

*/

/*
Identify inputs and outputs
  Input:
    A single integer that is positive negative or 0.

  Output:
    True or nothing.

Make the requirements explicit
  the term absolute value in this case refers to the integers unsigned value
  as either even or odd.

Identify the rules
  We are to return true if the number is odd, but it does not specify
  a return value if it is even or 0.

  The input will always be a valid integer.

  The function input will be passed as a number.

Create a mental model
  Given a valid integer input, we should return true if the input is odd.

Test Cases / Examples (E)
  Input:
    5
  Output:
    true

  Input:
    -4
  Output:

  Input:
    0
  Output:

Data Structure
  Our input will be a number. All we need to do is check if that number
  has a remainder when divided by 2. It should only be a one liner. I don't
  think we need a data structure.

Algorithm
  1. Check if n % 2 !== 0
    a. If so return true
    b. If not return false
*/

let isOdd = num => num % 2 !== 0;

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true