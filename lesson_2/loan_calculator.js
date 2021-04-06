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
  let loanAmount = Number(readline.question('$ '));

  // Get loan duration
  prompt(MESSAGES.loanDuration);
  let loanDuration = Number(readline.question());

  // Get APR and convert to workable number
  prompt(`${MESSAGES.APR} '${loanName}' loan?`);
  prompt(MESSAGES.APRValidate);
  let apr = Number(readline.question('% '));
  apr /= 12;
  apr /= 100;

  let monthlyPayment = (
    loanAmount * (apr / (1 - Math.pow((1 + apr), (-loanDuration))))
  );

  monthlyPayment = monthlyPayment.toFixed(2);

  let totalPayment = monthlyPayment * loanDuration;
  totalPayment = totalPayment.toFixed(2);

  let interestAmount = totalPayment - loanAmount;
  interestAmount = interestAmount.toFixed(2);

  prompt(`Your monthly payment will be: $${monthlyPayment}`);
  prompt(`You will pay a total of: $${interestAmount} in interest`);
  prompt(`Your total payment will be: $${totalPayment}`);

  break;
}