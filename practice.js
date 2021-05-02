let st = "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH";
let we = [1, 4, 4, 5, 2, 1];

let nameArr = st.split(',');
let nameObj = nameArr.reduce((arr, elem, index) => {
  let length = elem.length;
  let nameValue = elem.split('').reduce((acc, _, index) => {
    let charValue = elem.toLowerCase().charCodeAt(index) - 96;
    return acc + charValue;
  }, 0);
  arr.push([elem, (length + nameValue) * we[index]]);
  return arr;
}, []);

let sortedNames = nameObj.sort((a, b) => {
  let sortValue = b[1] - a[1];
  if (sortValue === 0) {
    if (a[0] > b[0]) {
      return 1;
    } else {
      return -1;
    }
  }
  return sortValue;
});

console.log(sortedNames);


// let b = 2;

// function test(b) {
//   return b += 5;
// }

// console.log(test());


/*
You're given an array of integers.  You must return the number of
'arithmetic progressions' of size 3 that are possible from that list.

In each progression, the differences between the elements must be the same.

Example:
[1, 2, 3, 5, 7, 9] ==> 5
The above has 5 progressions, seen below:
// [1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]

All array elements will be unique and the array will be sorted.
*/



// console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
// console.log(progressions([1, 2, 3, 4, 5]));    // 4
// console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10