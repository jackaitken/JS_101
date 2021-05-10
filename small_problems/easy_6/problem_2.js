const doubleConsonants = str => {
  const VOWELS = 'aeiou';

  let consArr = str.split('').map(char => {
    if (!VOWELS.includes(char.toLowerCase())) {
      if (char >= 'a' && char <= 'z') {
        return char.repeat(2);
      } else {
        return char;
      }
    } else {
      return char;
    }
  });
  return consArr.join('');
};

console.log(doubleConsonants('String'));
console.log(doubleConsonants('Hello-World'));
console.log(doubleConsonants('July 4th'));
console.log(doubleConsonants(''));