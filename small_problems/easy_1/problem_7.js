/*
PEDAC

UNDERSTAND THE PROBLEM:
  inputs and outputs
  make the requirements explicit
  identify the rules
  mental model

EXAMPLES/TEST CASES

DATA STRUCTURE

ALGORITHM

CODE

-----------------------
P
  INPUTS AND OUTPUTS
    Input:
      (string)
      2 strings of different length
    Output:
      (string)
      2 input strings concatenated so the smallest is first,
      the longest is second, followed again by the shortest.

  THE REQUIRMENTS ARE PRETTY CLEAR.

  WHAT ARE THE RULES
    1. We take two strings of varying length. We can assume that to be true
    2. With the two strings we then will concatenate 'short' + 'long' + 'short'

  MENTAL MODEL
    Given two strings of different lengths, return a new string that is the
    result of concatenating the shorter string + longer string + the shorter
    string.

E
  EXAMPLES:
    Input:
      'hi', 'hello'
    Output:
      'hihellohi'

    Input:
      'cream' 'ice'
    Output:
      'icecreamice'

D
  DATA STRUCTURE
    I don't really think this needs a data structure.

A
  ALGORITHM
    - Given two input strings
    - Find the length of both
    - concatenate short + long + short
*/

let shortLongConcat = (str1, str2) => {
  return str1.length > str2.length ? str2 + str1 + str2 : str1 + str2 + str1;
};

console.log(shortLongConcat('hi', 'hello'));
console.log(shortLongConcat('', 'brown'));
console.log(shortLongConcat('hey', 'what'));
console.log(shortLongConcat('ice', 'cream'));