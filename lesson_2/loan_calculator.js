let readline = require('readline-sync');
let MESSAGES = require('./loan_messages.json');

let prompt = txt => console.log(`=> ${txt}`);

prompt(MESSAGES.welcome);

while (true) {
  // Get name of loan
  prompt(MESSAGES.loanName);
  let loanName = readline.question();

  // Get loan amount
  prompt(`${MESSAGES.loanAmount} '${loanName}'?`);
  prompt(`${MESSAGES.amountValidate}`);
  let loanAmount = readline.question('$ ');

  // Get loan duration
  prompt(MESSAGES.loanDuration);
  let loanDuration = readline.question();

  // Get APR
  prompt(`${MESSAGES.APR} ${loanName}?`);
  prompt(MESSAGES.APRValidate);
  let apr = readline.question('% ');

  // Convert APR to workable number
  apr /= 100;

  let monthlyPayment = (
    loanAmount * (apr / (1 - Math.pow((1 + apr), (-loanDuration))))
  );

  monthlyPayment = monthlyPayment.toFixed(2);

  console.log(monthlyPayment);
}