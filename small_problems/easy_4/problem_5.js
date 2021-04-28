let isAlphabetic = char => char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';

let isNumeric = char => char >= 0 && char <= 9;

let isRealPalindrome = str => {
  let alphaString = str.split('').filter(char => {
    if (char !== ' ') {
      return isAlphabetic(char) || isNumeric(char);
    }
  });

  alphaString = alphaString.join('').toLowerCase();

  let reverseString = alphaString.split('').reverse().join('').toLowerCase();

  return alphaString === reverseString;
};


console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));