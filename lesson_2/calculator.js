// Prompt for first number.
// Prompt for second number.
// Prompt for operation.
// Perform the operation.
// Print result in terminal.

const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log('What is the first number?')
let number1 = readline.question();

console.log('What is the second number?')
let number2 = readline.question();

console.log(
  'What operation would you like to perform?\n1: Add\n2: Subtract\n3: Multiply\n4: Divide');

let operation = readline.question();

if (operation === '1') {
  output = Number(number1) + Number(number2);
} else if (operation === '2') { 
  output = Number(number1) - Number(number2);
} else if (operation === '3') { 
  output = Number(number1) * Number(number2);
} else if (operation === '4') {
  output = Number(number1) / Number(number2);
}

// OR: 

// let output;
// switch (operation) {
//   case '1': output = Number(number1) + Number(number2)
//     break
//   case '2': output = Number(number1) - Number(number2)
//     break
//   case '3': output = Number(number1) * Number(number2)
//     break
//   case '4': output = Number(number1) / Number(number2)
//     break
// }

// console.log(`The result is: ${output}`);
