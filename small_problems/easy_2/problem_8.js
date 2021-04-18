/*
Input:
  array of integers
  [1, 2, 3, 4, 5]
Output:
  array of ingtegers containing the values from the odd indexes
  [1, 3, 5]

Mental Model:
  Given an array of integers return a new array that conains the odd
  indexes of the original array

Examples:
  Input:
    [2, 3, 4, 5, 6]
  Output:
    [2, 4, 6]
  
  Input:
    [0]
  Output:
    [0]
  
  Input:
    [123];
  Output:
    [123];

Data structure
  Unless we can find a nice method we should use an array to check each index
  and push the number at that index to the array.
*/

let oddities = arr => {
  let oddIndexArr = [];

  for (let i = 0; i < arr.length; i += 2) {
    oddIndexArr.push(arr[i]);
  }
  return oddIndexArr;
};
let evens = arr => {
  let evenIndexArr = [];

  for (let i = 1; i < arr.length; i += 2) {
    evenIndexArr.push(arr[i]);
  }
  return evenIndexArr;
};

let methodFunc = arr => {
  let oddArr = arr.filter((_, index) => {
    return (index % 2 === 0);
  });
  return oddArr;
};

console.log(methodFunc([1, 2, 3, 4, 5, 6]));