/*
Given an array of elements
return the smallest numbers from the array
retain the original order

input:
  array of elements
output:
  array of smallest elements as they appear in the array

Rules:
  - elements can be duplicated

Idea:
  - if we sort the array to find the smallest n numbers
    then we can just build an array based on their original
    indices

Algorithm:
  - sort a copied array and return the smallest n numbers (helper)
  - set variable resultArr = []
  - iterate through the original array
    - if a number is in our n smallest array
      - add that number to the result arr
      - splice that number out of the n smallest array (helper)
  - return the result arr

Algorithm (helper):
  - input arr, n
  - sort a copy of arr
  - slice the elements from 0 to n
  - return that smallest array

Algorithm (splice):
  - take array as input and number
  - find index of number in array
  - splice out the number at that index
  - return the array
*/

function firstNSmallest(array, n) {
  let smallest = getSmallestArr(array, n);
  let resultArr = [];

  array.forEach(elem => {
    if (smallest.includes(elem)) {
      resultArr.push(elem);
      smallest = removeNumber(smallest, elem);
    }
  });
  return resultArr;
}

function getSmallestArr(array, n) {
  let sortArr = [...array].sort((a, b) => a - b);

  return sortArr.slice(0, n);
}

function removeNumber(array, num) {
  let index = array.indexOf(num);
  array.splice(index, 1);
  return array;
}

console.log(firstNSmallest([1,2,3,4,5],3)); //[1,2,3]);
console.log(firstNSmallest([5,4,3,2,1],3)); // [3,2,1]);
console.log(firstNSmallest([1,2,3,1,2],3)); // [1,2,1]);
console.log(firstNSmallest([1,2,3,-4,0],3)); // [1,-4,0]);
console.log(firstNSmallest([1,2,3,4,5],0)); // []);
console.log(firstNSmallest([1,2,3,4,5],5)); // [1,2,3,4,5]);
console.log(firstNSmallest([1,2,3,4,2],4)); // [1,2,3,2]);
console.log(firstNSmallest([2,1,2,3,4,2],2)); // [2,1]);
console.log(firstNSmallest([2,1,2,3,4,2],3)); // [2,1,2]);
console.log(firstNSmallest([2,1,2,3,4,2],4)); // [2,1,2,2]);