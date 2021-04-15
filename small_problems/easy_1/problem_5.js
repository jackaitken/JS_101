/*
PEDAC

UNDERSTAND THE PROBLEM (P)
  what are the inputs and outputs
  make the requirements explicit
  identify the rules
  mental model

EXAMPLES / TEST CASES (E)

DATA STRUCTURE (D)

ALGORITHM (A)

CODE (C)

------------------------
(P):
  INPUTS AND OUTPUTS
    Input:
      1. Bill total
      2. Tip rate
    Output:
      1. Tip based on bill total
      2. Total amount to pay
    
  EXPLICIT REQUIREMENTS

  RULES
    1. we need to get input from the user for both the bill amount and the tip
       rate
    2. we don't need to worry about input validation. We can assume that the 
       user has entered a number.

  MENTAL MODEL
    Given a bill amount and a specified tip rate from the user, we should output
    the tip amount in dollars and also the total amount to pay, which will
    include the original bill amount and the tip amount.

(E):
  Input:
    Bill amount: 200
    Tip percentage: 15
  Output:
    The tip is: $30.00
    The total is: $230.00

(D):
  We don't need a data structure. We can just handle this program through
  variables and calculations.

(A):
  1. first get the bill amount from the user
  2. next get the rate at which they would like to tip
  3. calculate the tip using calculateTip()
  4. output to user the tip amount and the tip amount + the
     bill total.
  5. END
*/

let readline = require('readline-sync');

console.log('What is the bill?');
let billAmount = Number(readline.prompt());

console.log('What is the tip percentage');
let tipPercentage = Number(readline.prompt());

tipPercentage /= 100;

let tipAmount = billAmount * tipPercentage;
let totalToPay = tipAmount + billAmount;

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${totalToPay.toFixed(2)}`);
