function maxRotation(num) {
  let numArray = String(num).split('');
  let counter = 0;

  while (counter < numArray.length - 1) {
    numArray = rotateRightmostDigits(numArray, counter);
    counter += 1;
  }
  return Number(numArray.join(''));
}

function rotateRightmostDigits(arr, count) {
  let rotatedNum = arr.splice(count, 1);
  arr.push(rotatedNum[0]);
  return arr;
}

console.log(maxRotation(735291) === 321579);
console.log(maxRotation(3) === 3);
console.log(maxRotation(35) === 53);
console.log(maxRotation(105) === 15); // -- the leading zero gets dropped
console.log(maxRotation(8703529146) === 7321609845);


/*
Given a number as input we need to return the number after it has been roated
a maximum amount of times.

Given the number:

-1-2345

1st rotation:
  2-3-451

2nd rotation:
  24-5-13

3rd rotation:
  241-3-5

4th and final rotation:
  24153

Algorithm:
  - set variable count = 0;
  - set variable = number as array of strings
  - while count < arr.length - 1
    - reassign array = rotateRightmostDigits()
    - counter += 1;
  - return Number(arr.join(''))
*/