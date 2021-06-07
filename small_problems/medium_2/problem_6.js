
/*
take as input a number
as output:
  sum of the positive integers
  -
  sum of the squares of all the positive numbers

this means we need to find the sum of all the numbers from 1 to count
then we need to find the sum of all of the squares of all numbers
from 1 to count

Algorithm:
  - first get sum of all numbers from 1 to n
  - then get sum of all squares of numbers from 1 to n
  - set variable listOfNums = []
  - set variable squaresOfNums = []
  - iterate from 1 to n:
    - at each number:
      - push to listOfNums
      - push num * num to squaresOfNums
  - reduce each to their sums
  - square listOfNums result
  - subtract listOfNums from squaresOfNums;
  - return result

*/

function sumSquareDifference(num) {
  let listOfNums = [];
  let squaresOfNums = [];

  for (let i = 1; i <= num; i++) {
    listOfNums.push(i);
    squaresOfNums.push(i ** 2);
  }
  let sumOfNums = listOfNums.reduce((acc, elem) => acc + elem) ** 2;
  let sumOfSquares = squaresOfNums.reduce((acc, elem) => acc + elem);

  return sumOfNums - sumOfSquares;
}

console.log(sumSquareDifference(3) === 22);
console.log(sumSquareDifference(10) === 2640);
console.log(sumSquareDifference(1) === 0);
console.log(sumSquareDifference(100) === 25164150);