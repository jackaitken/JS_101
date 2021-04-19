/*
Understand the problem
  Input:
    one arugment, string containing digits
  Output:
    the string converted to number

Identify the rules:
  We cannot use the Number or parseInt methods.
  We can ignore + or - signs
  We can assume all characters will be valid
  We should analyze each character in the string.

Data structure
  We could probably store each digit in an array after we've converted it
  then we can return that array.

Algorithm
  - we're given a string.
*/

let stringToInteger = str => {
  const NUMS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };

  let mappedArr = str.split('').map(char => NUMS[char]);

  let value = 0;
  mappedArr.forEach(num => (value = (value * 10) + num));

  return value;
};

console.log(stringToInteger("308184720"));
