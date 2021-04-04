const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

let prompt = msg => console.log(`=> ${msg}`);

let invalidNumber = num => {
  return num.trimStart() === '' || Number.isNaN(Number(num));
};

let invalidLetter = char => {
  return char === 'y' || char === 'n';
};

prompt(MESSAGES.welcome);

let calculateAgain = true;

do {
  prompt(MESSAGES.first);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES.numberValidate);
    number1 = readline.question();
  }

  prompt(MESSAGES.second);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES.numberValidate);
    number2 = readline.question();
  }

  prompt(MESSAGES.operation);
  let operation = readline.question();

  while (invalidNumber(operation) || (operation < 1 || operation > 4)) {
    prompt(MESSAGES.operatorValidate);
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

  prompt(`${MESSAGES.result} ${output}`);

  // Run another calculation or exit?
  prompt(MESSAGES.runAgain);
  let continueQuestion = readline.question();

  while (!invalidLetter(continueQuestion)) {
    prompt(MESSAGES.runAgainValidate);
    continueQuestion = readline.question();
  }

  if (continueQuestion.toLowerCase() === 'y') {
    calculateAgain = true;
  } else {
    prompt(MESSAGES.goodbye);
    calculateAgain = false;
  }

} while (calculateAgain);
