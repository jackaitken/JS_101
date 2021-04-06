let readline = require('readline-sync');
let MESSAGES = require('./loan_messages.json');

let prompt = txt => console.log(`=> ${txt}`);

let numberIsInvalid = amount => {
  return Number.isNaN(Number(amount)) || amount < 1;
};

let nameIsValid = name => name.length !== 0;

let continueValidation = key => key === 'y' || key === 'n';

prompt(MESSAGES.welcome);

while (true) {
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
  let loanMonths = Number(readline.question());

  while (numberIsInvalid(loanMonths)) {
    prompt(`${MESSAGES.loanDuration}`);
    loanMonths = Number(readline.question('$ '));
  }

  // Get APR and convert to workable number
  prompt(`${MESSAGES.APR} '${loanName}' loan?`);
  prompt(MESSAGES.APRValidate);
  let apr = Number(readline.question('% '));

  while (numberIsInvalid(apr)) {
    prompt(`${MESSAGES.APRValidate}`);
    apr = Number(readline.question('$ '));
  }

  apr /= 12;
  apr /= 100;

  let monthlyPayment = (
    loanAmount * (apr / (1 - Math.pow((1 + apr), (-loanMonths))))
  );

  monthlyPayment = monthlyPayment.toFixed(2);

  let totalPayment = monthlyPayment * loanMonths;
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