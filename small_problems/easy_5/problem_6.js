let multiplicativeAverage = arr => {
  let product = arr.reduce((acc, elem) => {
    return acc * elem;
  }, 1);

  let lengthDivision = product / arr.length;
  return String(lengthDivision.toFixed(3));
};

console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));