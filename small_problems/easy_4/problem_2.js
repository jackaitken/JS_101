let readline = require('readline-sync');

let arr = [];

console.log('Enter the 1st number');
arr.push(readline.prompt());

console.log('Enter the 2nd number');
arr.push(readline.prompt());

console.log('Enter the 3rd number');
arr.push(readline.prompt());

console.log('Enter the 4th number');
arr.push(readline.prompt());

console.log('Enter the 5th number');
arr.push(readline.prompt());

console.log('Enter the last number');
let lastNum = readline.prompt();

// if (arr.indexOf(lastNum) === -1) {
//   console.log(`The number ${lastNum} does not appear in ${arr.join(', ')}.`);
// } else {
//   console.log(`The number ${lastNum} does appear in ${arr.join(', ')}.`);
// }

let greaterThan = arr.some(num => num > 25);

if (greaterThan) {
  console.log(`There is a number greater than 25 in ${arr.join(', ')}.`);
} else {
  console.log(`There is not a number greater than 25 in ${arr.join(', ')}.`);
}