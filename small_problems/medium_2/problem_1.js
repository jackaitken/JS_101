/*
We need to write a function that will take as input a string.
As output, we should return an object that has:
  1. the percentage of characters that are lowercase
  2. the percentage of characters that are uppercase
  3. the percentage that are neither

Algorithm:
  - set an object = {};
  - set a variable lowerCase = 0
  - set a variable upperCase = 0
  - set a variable neiher = 0
  - split string by character and iterate through characters:
    - for each character:
      -check if it's lowercase
      - if so:
        add 1 to lowerCase
      -check if it's uppercase:
      - if so:
        add 1 to uppercase
      - else:
        add 1 to neither
  - at the end divide each by the total length of the string to get it's
    percentage
  - add those values to the object
  - return the object
*/

function letterPercentages(string) {

  let obj = getRawObj(string);

  obj.lowercase = String(((obj.lowercase / string.length) * 100).toFixed(2));
  obj.uppercase = String(((obj.uppercase / string.length) * 100).toFixed(2));
  obj.neither = String(((obj.neither / string.length) * 100).toFixed(2));

  return obj;
}

function getRawObj(string) {
  return string.split('').reduce((acc, elem) => {
    if (elem.toLowerCase() >= 'a' && elem.toLowerCase() <= 'z') {
      if (elem === elem.toLowerCase()) {
        acc.lowercase += 1;
      } else if (elem === elem.toUpperCase()) {
        acc.uppercase += 1;
      }
    } else {
      acc.neither += 1;
    }
    return acc;
  }, {lowercase: 0, uppercase: 0, neither: 0});
}

console.log(letterPercentages('123'));