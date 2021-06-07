let fib = n => {
  let curTotal = 0;
  let curFibNum = 0;
  let lastFibNum = 1;

  while (n > 0) {
    curTotal = curFibNum + lastFibNum;
    lastFibNum = curFibNum;
    curFibNum = curTotal;
    n -= 1;
  }
  return curTotal;
};

console.log(fib(75));