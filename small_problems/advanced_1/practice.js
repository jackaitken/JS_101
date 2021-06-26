/*
Only Duplicates (6 kyu)
https://www.codewars.com/kata/5a1dc4baffe75f270200006b/train/javascript

Given a string, remove any characters that are unique from the string.

Example:

'colloquial' // 'ollol'

create an object which stores the frequency of chars
iterate through the string again
and remove that char if it only appears once

Given a string we need to remove any characters
that only occur once.

Algorithm:
*/

function onlyDuplicates(str) {
  let seenObj = {};
  str.split('').forEach(char => {
    seenObj[char] ? seenObj[char] += 1 : seenObj[char] = 1;
  });

  return str.split('').filter(char => {
    return seenObj[char] > 1;
  }).join('');
}


console.log(onlyDuplicates('abccdefee')); // 'cceee'
console.log(onlyDuplicates('hello')); // 'll'
console.log(onlyDuplicates('colloquial')); // 'ollol'
console.log(onlyDuplicates('foundersandcoders')); // 'ondersndoders'
