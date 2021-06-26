/*
Given two array's a and b
I need to remove all values from
list a that exist in list b

Rules:
  - if the value exists more than once in a:
    - then all occurances of that char should be removed

Algorthim:
  - iterate through list b:
    - create new RegExp object for element
    - replace each object with a #
  - return a filtered list without the hashes
*/

function arrayDiff(a, b) {
  return a.filter(elem => !b.includes(elem));
}

console.log(arrayDiff([], [4,5])); //[], "a was [], b was [4,5]");
console.log(arrayDiff([3,4], [3])); //[4], "a was [3,4], b was [3]");
console.log(arrayDiff([1,8,2], [])); // [1,8,2], "a was [1,8,2], b was []");
console.log(arrayDiff([1,2,3], [1,2])); // [3], "a was [1,2,3], b was [1,2]")
