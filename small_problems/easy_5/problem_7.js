/*
given two arrays as input, return a new array that contains each product
of the two numbers at the same index in both arrays.

multiplyList([3, 5, 7], [9, 10, 11]); => [27, 50, 77]

3 * 9 = 27
5 * 10 = 50
7 * 11 = 77

We could probably accomplish this with a reduce function.
We could multiply the number at arr1[index] and arr2[index]
*/

let multiplyList = (arr1, arr2) => {
  return arr1.reduce((arr, _, index) => {
    arr.push(arr1[index] * arr2[index]);
    return arr;
  }, []);
};

console.log(multiplyList([3, 5, 7], [9, 10, 11]));