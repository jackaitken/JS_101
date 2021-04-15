let sumOfMultiples = (targetNumber, factors) => {
  let multiples = [];
  if (factors.length === 0) {
    factors = [3, 5];
  }

  factors.forEach(factor => {
    for (let i = factor; i < targetNumber; i += factor) {
      if (multiples.indexOf(i) === -1) {
        multiples.push(i);
      }
    }
  });
  return multiples.reduce((sum, value) => {
    return sum + value;
  }, 0);
};


console.log(sumOfMultiples(20, [3, 5]));  // returns 78
