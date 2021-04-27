/*
PEDAC

Our goal is to write a function that returns the index of the first fib
number that contains the number of digits specifed by the argument.

Here's a test case to help drive that home:

findFibonacciIndexByLength(2n) === 7n;

so the input is an integer representing the number of digits, the output
is an index where that total number of digits first appears. For double digits
the first time we see that is in index 7.

how does our fib function usually work:
- here is how we would usualy write our fibonacci sequence.
- We have an outer function called memo, which takes the nth term in the
  fib sequence. Then from memo we make a call to fib, which does the job
  of calculating fibonacci for us.

However we need our fib function to work differently. We'll be given a number
that represents a total amount of digits, and we need to return the index
at which that number of digits first appears.
*/

// let memo = nthTerm => {
//   let fibCache = {1: 1, 2: 1};

//   let fib = nthTerm => {
//     if (nthTerm in fibCache) {
//       return fibCache[nthTerm];
//     } else {
//       let result = fib(nthTerm - 1) + fib(nthTerm - 2);
//       fibCache[nthTerm] = result;
//       return result;
//     }
//   };
//   console.log(fib(nthTerm));
// };

// memo(7);

/*
This returns to us the fibonacci number at the nth term in the sequence.
We want to rewrite this so that the input represents the length of the
fibonacci number and our output is which fibonacci term that length first
occurred at.
*/

// let fibLength = length => {
//   let curFibNum = 0;
//   let fibNumLength = String(curFibNum).length;

//   for (let i = 0; fibNumLength < length; i++) {
//     curFibNum = (i + 1) + (i + 2);
//     console.log(curFibNum);
//   }
// };

// fibLength(3);

/*
ALGORITHM
  - We're given an input that represents a number of digits
  - We need to calculate fibonacci until the length fibonacci number reaches
    that of our input.
*/


let fib = length => {

  let firstNum = 1n;
  let secondNum = 1n;
  let nextFib;
  let fibTerm = 1n;

  while (String(firstNum).length < length) {
    nextFib = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = nextFib;
    fibTerm += 1n;
  }
  return fibTerm;
};

console.log(fib(100) === 476n);