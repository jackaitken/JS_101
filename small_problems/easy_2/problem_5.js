/*
UNDERSTAND THE PROBLEM
  input and output:
    Input:
      two integers
    Output:
      perform (*, +, /, -, **, %) operations on both numbers
  
*/

let readline = require('readline-sync');

console.log('Enter the first number:');
let num1 = Number(readline.prompt());

console.log('Enter the second number:');
let num2 = Number(readline.prompt());

console.log(`> ${num1} + ${num2} = ${num1 + num2}`);
console.log(`> ${num1} - ${num2} = ${num1 - num2}`);
console.log(`> ${num1} * ${num2} = ${num1 * num2}`);
console.log(`> ${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
console.log(`> ${num1} % ${num2} = ${num1 % num2}`);
console.log(`> ${num1} ** ${num2} = ${num1 ** num2}`);