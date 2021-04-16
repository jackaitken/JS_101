/*
input output:
  Input:
    string
  Output:
    sum of UTF-16 values of each char

  explicit requirements:
    the sum of each chars UTF-16 value is what's called the string
    value.

  mental model:
    Given a string, determine it's value given the UTF 16 value of
    each character.

  DATA STRUCTURE
    an array could be helpful again to gather all the values
*/

let utf16Value = string => {
  let charValues = [];

  string.split('').forEach(char => {
    charValues.push(char.charCodeAt(0));
  });

  return charValues.reduce((acc, elem) => {
    return acc + elem;
  }, 0);
};

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0
