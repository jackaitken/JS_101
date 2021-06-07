let fib = n => {
  let fibObj = {};

  let calculateFib = n => {
    if (n <= 2) {
      return 1;
    }
    if (fibObj[n]) {
      return fibObj[n];
    }
    fibObj[n] = calculateFib(n - 2) + calculateFib(n - 1);
    return fibObj[n];
  };
  return calculateFib(n);
};

console.log(fib(75));