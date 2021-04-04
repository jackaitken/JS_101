const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

let prompt = msg => console.log(`=> ${msg}`);

let invalidNumber = num => {
  return num.trimStart() === '' || Number.isNaN(Number(num));
};

let invalidLetter = char => {
  return char === 'y' || char === 'n';
};

prompt('Please choose a language:\n1: English\n2: Spanish\n3: French');
let language = readline.question();

while (invalidNumber(language) || (language < 1 || language > 3)) {
  prompt(MESSAGES["language validator"].validate);
  language = readline.question();
}

prompt(MESSAGES[language].welcome);

while (true) {
  prompt(MESSAGES[language].first);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES[language].numberValidate);
    number1 = readline.question();
  }

  prompt(MESSAGES[language].second);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES[language].numberValidate);
    number2 = readline.question();
  }

  prompt(MESSAGES[language].operation);
  let operation = readline.question();

  while (invalidNumber(operation) || (operation < 1 || operation > 4)) {
    prompt(MESSAGES[language].operatorValidate);
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

  prompt(`${MESSAGES[language].result} ${output}`);

  // Run another calculation or exit?
  prompt(MESSAGES[language].runAgain);
  let continueQuestion = readline.question();

  while (!invalidLetter(continueQuestion)) {
    prompt(MESSAGES[language].runAgainValidate);
    continueQuestion = readline.question();
  }

  if (continueQuestion.toLowerCase() !== 'y') {
    prompt(MESSAGES[language].goodbye);
    break;
  }
}