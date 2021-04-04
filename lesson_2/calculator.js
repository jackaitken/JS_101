const readline = require('readline-sync');

let prompt = msg => console.log(`=> ${msg}`);

let invalidNumber = num => {
  return num.trimStart() === '' || Number.isNaN(Number(num));
};

prompt('Welcome to Calculator!');

prompt('What is the first number?');
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt(`Please enter a valid number.`);
  number1 = readline.question();
}

prompt('What is the second number?');
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt(`Please enter a valid number.`);
  number2 = readline.question();
}

prompt(
  'What operation would you like to perform?\n1: Add\n2: Subtract\n3: Multiply\n4: Divide');

let operation = readline.question();

while (invalidNumber(operation) || (operation < 1 || operation > 4)) {
  prompt(`Please enter 1, 2, 3, or 4`);
  operation = readline.question();
}

let output;
switch (operation) {
  case '1': output = Number(number1) + Number(number2);
    break;
  case '2': output = Number(number1) - Number(number2);
    break;
  case '3': output = Number(number1) * Number(number2);
    break;
  case '4': output = Number(number1) / Number(number2);
    break;
}

prompt(`The result is: ${output}`);
