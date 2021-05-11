let sum = num => {
  return String(num).split('').reduce((acc, elem) => {
    return Number(elem) + acc;
  }, 0);
};

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));