
/*
Given a string as input check whether removing one character
will make the string a palindrome

Rules:
  - if the string is already a palindrome, return that string
  - if it's not possible return 'non possible'
  - if we can do it, retun 'remove one'

Algorithm:
  - if reversed string === string return OK
  - set variable checkString = reversed input string
  - for each character
    - check if splicing that character out === checkstring
    - if so return 'remove one'
  - return 'not possible'
*/

function solve(s) {
  let reversedString = s.split('').reverse().join('');
  if (reversedString === s) return 'OK';

  for (let i in s) {
    let charRemovedArr = s.split('');
    charRemovedArr.splice(i, 1);
    if (charRemovedArr.join('') === charRemovedArr.reverse('').join('')) {
      return 'remove one';
    }
  }
  return 'not possible';
}

console.log(solve("abba") === "OK");
console.log(solve("abbaa") === "remove one");
console.log(solve("abbaab") === "not possible");
console.log(solve("madmam") === "remove one");
console.log(solve("raydarm") === "not possible");
console.log(solve("hannah") === "OK");
