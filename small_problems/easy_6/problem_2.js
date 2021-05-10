const doubleConsonants = str => {
  const VOWELS = 'aeiou';

  let consArr = str.split('').map(char => {
    if (!VOWELS.includes(char)) {
      return char.repeat(2);
    } else {
      return char;
    }
  });
  return consArr.join('');
};

console.log(doubleConsonants('String'));