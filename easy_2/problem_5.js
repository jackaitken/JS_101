/*
Splice can take a a start argument and then an argument of how many elements
to delete. So splice(2, 1) says to start at index 2 and delete 1 element.
*/

let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1);
console.log(numbers);