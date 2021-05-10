const negative = num => {
  return Math.sign(num) === -1 ? num : -num;
};

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));