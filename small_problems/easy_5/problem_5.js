/*
We need to write a function that will take as input two arrays
and then return one array containing both sets of element in alternating
order. For example:

//interleave([1, 2, 3], ['a', 'b', 'c']) => [1, "a", 2, "b", 3, "c"]

So the first element of the first array is input, then we alternate back and
forth pushing the element of the other array in afterward.

Rules
  - we can always assume that both arrays are non empty
  - we can always assume they have the same number of elements

ALGORITHM
  what if we set up a while loop
  We can set a counter and an empty array
  we will push the first item of the first array
  then the first item of the second array
  then increment the counter
*/

let interleave = (arr1, arr2) => {
  return arr1.reduce((acc, _, index) => {
    acc.push(arr1[index], arr2[index]);
    return acc;
  }, []);
};

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));