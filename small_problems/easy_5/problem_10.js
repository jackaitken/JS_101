let average = arr => {
  let sum = arr.reduce((acc, elem) => {
    return acc + elem;
  }, 0);

  return Math.floor(sum / arr.length);
};

console.log(average([1, 5, 87, 45, 8, 8]));
console.log(average([9, 47, 23, 95, 16, 52]));