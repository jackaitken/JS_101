/*
We need to write a function that will return true is all of the alphabetic
characters are uppercase. If so we should return true, else we should return
false.

We need to be able to ignore non alphabetic characters.

the array method every seems like a good option here because it can break
early if it encounters a falsy value.

Maybe we can write a helper that will return only the alphabetic characters
then we can run our every on that returned array.
*/

function isUppercase(str) {
  return getAlphabetics(str).every(char => {
    return char === char.toUpperCase();
  });
}

function getAlphabetics(string) {
  return string.split('').filter(char => {
    return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';
  });
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));