let number = 1;
let newNumber = number;
console.log(newNumber === number);

let arr = [1, 2, 3];
let newArr = arr;

newArr.push(5);
console.log(newArr, arr);
console.log(newArr === arr);