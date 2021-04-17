/*
UNDERSTAND THE PROBLEM
  inputs and outputs:
    Input:
      Two arguments of any type
    Output:
      true if only one argument is true and false otherwise.

  make the requirements explicit:
    Exclusive or, means that only one item may be true. If any other scenario
    is the case than it's false.

    We can take any type, but we must evaluate its truthy or falsyness.

  identify the rules
    We are to return a boolean value.
    falsy values are:
      ''
      0
      null
      undefined
      []
      {}

  mental model
    Given two arguments, determine whether only one of the arguments has
    a truthy value. In any other scenario return false.

*/
xor = (num1, num2) => {
  if ((num1 && !num2) || (!num1 && num2)) {
    return true;
  } else {
    return false;
  }
};

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);