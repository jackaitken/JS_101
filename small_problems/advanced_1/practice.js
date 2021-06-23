/*
Given two strings
we need to determine if both strings
have a matching substring

Rules:
  - only consider substrings that are longer than one letter
  - looks like it should be case insensitive
  - two empty strings do not share substrings

Examples:
  - 'Something' 'Home'
  - 'om' and 'om' are the first matching substring

supercalifragilisticexpialidocious
SoundOfItIsAtrociou

1234567
541265

Algorithm:
  - first check that the input strings are longer than 1 character
  - find ALL substrings of both str1 and str2 that are longer than
    - 1 character
  - make sure they're all lower case
  - iterate over first set of substrings
  - check if that substring is in the other set
*/

function substringTest(str1, str2) {
  let str1Substrs = getSubstrs(str1);
  let str2Substrs = getSubstrs(str2);

  for (let i = 0; i < str1Substrs.length; i++) {
    if (str2Substrs.includes(str1Substrs[i])) {
      return true;
    }
  }
  return false;
}

function getSubstrs(string) {
  let substrs = [];
  string = string.toLowerCase();

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 2; j < string.length; j++) {
      substrs.push(string.slice(i, j));
    }
  }
  return substrs;
}


console.log(substringTest('Something', 'Fun') === false);
console.log(substringTest('Something', 'Home') === true);
console.log(substringTest('Something', '') === false);
console.log(substringTest('', 'Something') === false);
console.log(substringTest('BANANA', 'banana') === true);
console.log(substringTest('test', '111t') === false);
console.log(substringTest('', '') === false);
console.log(substringTest('1234567', '541265') === true);
console.log(substringTest('supercalifragilisticexpialidocious', 'SoundOfItIsAtrociou') === true);
