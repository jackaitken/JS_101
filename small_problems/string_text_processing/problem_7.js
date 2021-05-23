let staggeredCase = (str) => {
  let capital = false;
  return str.split('').map(char => {
    if (!(char >= 'a' && char <= 'z')) {
      return char;
    } else {
      capital = !capital;
      return capital ? char.toUpperCase() : char.toLowerCase();
    }
  }).join('');
};

console.log(staggeredCase("ignore 77 the 444 numbers"));

