/*
Only Duplicates (6 kyu)
https://www.codewars.com/kata/5a1dc4baffe75f270200006b/train/javascript

Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"

Given a string we need to remove any characters
that only occur once.

Algorithm:
  - create an empty string var
  - create a seen array
  - iterate through the input string
    - if char is in the seen arr
      - add to the str var
    - else
      - add it to the seen arr
  - return the string var

*/

function onlyDuplicates(str) {
  let resultStr = '';
  let seenArr = [];

  str.split('').forEach(char => {
    if (seenArr.includes(char)) {
      if (!resultStr.includes(char)) {
        resultStr += char.repeat(2);
      } else {
        resultStr += char;
      }
    } else {
      seenArr.push(char);
    }
  });
  return resultStr;
}

function onlyDuplicates(str) {
  let seenObj = {};
  str.split('').forEach(char => {
    seenObj[char] ? seenObj[char] += 1 : seenObj[char] = 1;
  });

  let nonUniques = Object.entries(seenObj).filter(pair => {
    return pair[1] > 1;
  });

  return nonUniques.map(pair => pair[0].repeat(pair[1])).join('');
}


console.log(onlyDuplicates('abccdefee')); // 'cceee'
console.log(onlyDuplicates('hello')); // 'll'
console.log(onlyDuplicates('colloquial')); // 'ollol'
console.log(onlyDuplicates('foundersandcoders')); // 'ondersndoders'
