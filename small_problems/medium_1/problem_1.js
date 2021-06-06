function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (!arr.length) {
    return [];
  }

  let copiedArr = [...arr];
  let firstElement = copiedArr.shift();
  copiedArr.push(firstElement);
  return copiedArr;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);   

/*
input: array
output: new array with the first element moved the the end of the array

We need to write a function that will take as input an array and return 
a new array with the first element now in the the last position. It should not modify the array

Rules:
   - if the argument is not an array return undefined

Algorithm:
  - return undefined if the argument is not an array
  - if it is, save a copy of the array
  - then remove the first element of the array and push that element into the end
  - return that array

*/