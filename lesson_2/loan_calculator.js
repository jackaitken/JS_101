let readline = require('readline-sync');
let MESSAGES = require('./loan_messages.json');

let prompt = txt => console.log(`=> ${txt}`);

// Validation functions

let numberIsInvalid = amount => {
  return Number.isNaN(Number(amount)) || amount < 1;
};

let nameIsValid = name => name.length !== 0;

let continueValidation = key => {
  return key.toLowerCase() === 'y' || key.toLowerCase() === 'n';
};

while (true) {
  console.clear();
  prompt(MESSAGES.welcome);

  // Get name of loan
  prompt(MESSAGES.loanName);
  let loanName = readline.question();

  while (!nameIsValid(loanName)) {
    prompt(MESSAGES.nameValidate);
    loanName = readline.question();
  }

  // Get loan amount
  prompt(`${MESSAGES.loanAmount} '${loanName}'?`);
  prompt(`${MESSAGES.amountValidate}`);
  let loanAmount = Number(readline.question('$ '));

  while (numberIsInvalid(loanAmount)) {
    prompt(`${MESSAGES.amountValidate}`);
    loanAmount = Number(readline.question('$ '));
  }

  // Get loan duration
  prompt(MESSAGES.loanDuration);
  let loanDuration = Number(readline.question());

  while (numberIsInvalid(loanDuration)) {
    prompt(`${MESSAGES.loanDuration}`);
    loanDuration = Number(readline.question());
  }

  // Convert loanDuration from years to months
  loanDuration *= 12;

  // Get APR and convert to workable number
  prompt(`${MESSAGES.APR} '${loanName}' loan?`);
  prompt(MESSAGES.APRValidate);
  let apr = Number(readline.question('% '));

  while (numberIsInvalid(apr)) {
    prompt(`${MESSAGES.APRValidate}`);
    apr = Number(readline.question('% '));
  }

  let monthlyRate = apr / 12;
  monthlyRate /= 100;

  let monthlyPayment = (loanAmount *
                (monthlyRate /
                (1 - Math.pow((1 + monthlyRate), (-loanDuration))))
  );

  monthlyPayment = monthlyPayment.toFixed(2);

  let totalPayment = monthlyPayment * loanDuration;
  totalPayment = totalPayment.toFixed(2);

  let interestAmount = totalPayment - loanAmount;
  interestAmount = interestAmount.toFixed(2);

  prompt(`Your monthly payment will be: $${monthlyPayment}.`);
  prompt(`You will pay a total of: $${interestAmount} in interest.`);
  prompt(`Your total payment will be: $${totalPayment}.`);

  console.log('\n');

  prompt(MESSAGES.another);
  prompt(MESSAGES.yOrN);
  let anotherLoan = readline.question();

  while (!continueValidation(anotherLoan)) {
    prompt(MESSAGES.yOrN);
    anotherLoan = readline.question();
  }

  if (anotherLoan === 'n') {
    prompt(MESSAGES.goodbye);
    break;
  }
}