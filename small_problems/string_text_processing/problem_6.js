let staggeredCase = str => {
  return str.split('').map((char, index) => {
    return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
  }).join('');
};

console.log(staggeredCase('I Love Launch School!'));

console.log(staggeredCase('I Love Launch School!') === "I LoVe lAuNcH ScHoOl!");
