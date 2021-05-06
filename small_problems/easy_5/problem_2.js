/*
input:
  2 arrays
output:
  union of two arrays with no duplicates.

Rules:
  - even if there were duplicates in the individual arrays. There
    should only be unique values in the return array.
  - Must remain in same order as argument arrangment:
    [1, 3, 5] [3, 6, 9] --> [1, 3, 5, 6, 9];

mental model:
  - Given two arrays, return one array that includes a union of both arrays
    containing only unique values.

ALGORITHM
  - First thought is to set an empty array, and begin iterating through
    each argument.
  - At each element in the array we'll check if that value exists in the
    combined array.
      -If so we can ignore it
      -If not we can add it.
  - Then we can return this single array.
*/

const union = (arr1, arr2) => {
  let unionArray = [];

  let rawCombinedArray = [arr1, arr2];

  rawCombinedArray.forEach(subarr => {
    subarr.forEach(num => {
      if (unionArray.indexOf(num) === -1) {
        unionArray.push(num);
      }
    });
  });
  return unionArray;
};

console.log(union([1, 3, 5], [3, 6, 9]));