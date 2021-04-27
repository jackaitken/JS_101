/*
PEDAC

UNDERSTAND THE PROBLEM
  inputs and outputs:
    Input:
      - integer greater than 1
    Output:
      - sum of all numbers between 1 and n that are multiples of
        3 or 5.

  make the requirements clear:
    - we need to calculate for both 1 and n
    - we are not calculating each number between them
      only the multiples of 3 and 5
    - then we add all of those numbers

  indentify the rules:
    - n must be greater than 1
    - our sum cannot include numbers that are not multiples of 3
      or 5.

  mental model:
    Given a number n greater than 1, compute the sum of all numbers
    from 1 to n inclusive that are multiples of 3 or 5.

EXAMPLES:
  Input:
    20
  Output:
    98

  Input:
    9
  Output:
    23

DATA STRUCTURE
  This might be a good spot for an array to gather all the numbers
  we need.

ALGORITHM
  - Given an integer n greater than 1
  - For each number from 1 to n, check if that number is a multiple of
    3 or 5
  - Add it to a new array
  - return the sum of that array's integers.
*/

let multiSum = num => {
  let multiSumArr = [];

  for (let i = 1; i <= num; i++ ) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiSumArr.push(i);
    }
  }
  return multiSumArr.reduce((acc, elem) => {
    return acc + elem;
  }, 0);

};

console.log(multiSum(3));       // 3
console.log(multiSum(5));       // 11
console.log(multiSum(10));      // 44
console.log(multiSum(1000));    // 234212
