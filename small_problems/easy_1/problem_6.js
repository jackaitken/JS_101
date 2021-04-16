/*
PEDAC

UNDERSTAND THE PROBLEM (P)
  What are the inputs and outputs
  How can we make the requirements explicit
  What are the rules
  Mental model

EXAMPLES / TEST CASES (E)

DATA STRUCTURE (D)

ALGORITHM (A)

CODE (C)

-----------------------
P:
  INPUTS AND OUTPUTS:
    Input:
      Integer greater than 0
      's' for sum or 'p' for product
    Output:
      Sum from 1 to n
      or
      Product from 1 to n

  HOW CAN WE MAKE THE REQUIREMENTS EXPLICIT
    - Inlcusive in this case means we need to include both
      1 and n in our calculation.
    - If product is selected we're essentially asking for n!
    - We can write a recursive factorial funciton to help
    - We can also write another recursive function to 
      help with the additon.

  WHAT ARE THE RULES?
    - the user sholud enter an integer greater than 0
    - then we should ask the user if they want to calculate EITHER:
        the sum of all the numbers between 1 and their number + 1
        or the product of all the numbers between 1 and their number + 1
    - They did not mention input validation so we should assume that
      we need to do that on our own to ensure the entered integer
      is greater than 0.
    - We need to calculate from 1 to their number inclusive. So we need
      to include 1 and their number in our calculation.

  MENTAL MODEL
    Given an integer n greater than 0, calculate either the sum or the product
    of all the integers from 1 to n including both 1 and n in your calculation.
    Output the result to the user.

E:
  EXAMPLES
    Input:
      10
      's'
    Output:
      45

    Input:
      5
      'p'
    Output:
      120

D:
  DATA STRUCTURE
    I can't foresee us needing a data structure for this problem. Perhaps
    if I weren't going to use a factorial function to get the product I would
    use an array, but the factorial funciton is going to return to us that
    number quite simply.

A:
  ALGORITHM
    - Given an integer n greater than 0, calculate the sum or product based
      on user selection.
    - If user enters number less than 1, re prompt
    - If users enters letter other than 's' or 'p', re prompt
    - calculate sum or product of numbers from 1 to n inclusive.
    - return sum or product.
*/
let readline = require('readline-sync');

let getInt = () => {
  const getIntPrompt = 'Please enter an integer greater than 0: ';
  console.log(getIntPrompt);
  let userInt = readline.prompt();

  while (userInt < 1) {
    console.log(getIntPrompt);
    userInt = readline.prompt();
  }
  return Number(userInt);
};

let getOperation = () => {
  const getOperationPrompt = "Enter 's' to compute the sum, or 'p' to compute the product: ";
  console.log(getOperationPrompt);
  let sumOrProd = readline.prompt().toLowerCase();

  while (sumOrProd !== 's' && sumOrProd !== 'p') {
    console.log(getOperationPrompt);
    sumOrProd = readline.prompt();
  }
  return sumOrProd;
};

let calculateResult = (num, operation) => {
  if (num === 1) {
    return 1;
  }

  if (operation === 's') {
    return num + calculateResult(num - 1, operation);
  } else {
    return num * calculateResult(num - 1, operation);
  }
};

// Main program

const OPERATION_KEY = {
  s: 'sum',
  p: 'product'
};

let number = getInt();
let operation = getOperation();
let result = calculateResult(number, operation);

console.log(`The ${OPERATION_KEY[operation]} of the integers between 1 and ${number} is ${result}` );
