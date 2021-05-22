/*
We need to write a function that takes as input two arrays
We need to output all possible products of each number from the first
array multiplied by the second array.

So for example:

multiplyAllPairs([2, 4], [4, 3, 1, 2])

would output:

[2, 4, 4, 6, 8, 8, 12, 16]

The brute force solution is a nested loop.
*/

function multiplyAllPairs(arr1, arr2) {
  let products = [];

  arr1.forEach(outerNum => {
    arr2.forEach(innerNum => {
      products.push(outerNum * innerNum);
    });
  });
  return products.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));