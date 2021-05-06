/*
input:
  array
output:
  two arrays. the first output array should have the first half
  of numbers in the input array, the second should have the second half

Rules:
  - An even amount of numbers is straight forward
  - If we have an odd amount, the middle number should appear in the
    first output array
  - We should always output two arrays, even if there is one or no
    numbers

ALGORITHM
  - given an array of length n we should floor n / 2.
  - we can use this result to index into the array at the first half.
  - Then iterate over the numbers in the array up to that value and
    insert them into our first return array
  - After that we'll insert them into the second return array
  - If the array length is 0, then we should just return two empty arrays
    because we can't do 0 division.
*/

let halvsies = arr => {

  let returnArr1 = [];
  let returnArr2 = [];

  let half = halfOfArr(arr);

  arr.forEach((num, index) => {
    if (index < half) {
      returnArr1.push(num);
    } else {
      returnArr2.push(num);
    }
  });
  return [returnArr1, returnArr2];
};

function halfOfArr(arr) {
  let half;
  if (arr.length % 2 === 0) {
    half = arr.length / 2;
  } else {
    half = Math.floor(arr.length / 2) + 1;
  }
  return half;
}

// much quicker solution:

let halvsies2 = arr => {
  let half = Math.ceil(arr.length / 2);
  let firstHalf = arr.slice(0, half);
  let secondHalf = arr.slice(half);
  return [firstHalf, secondHalf];
};


console.log(halvsies2([1, 2, 3, 4]));
console.log(halvsies2([1, 5, 2, 4, 3]));
console.log(halvsies2([5]));
console.log(halvsies2([]));