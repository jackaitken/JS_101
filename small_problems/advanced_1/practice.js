/*
Title case means:
  1. each word is uppercased
  2. unless it's an exception like 'of' is in all
     lowercase

Rules:
  - the first word no matter what should be uppercased
  - each subsequence word should have it's first letter
    uppercased unless it exists in the minor words string

Input:
  - the string that needs to be converted
  - a string of minor words that must be lowercased
    again unless it's the first word

Algorithm:
  - lowercase entire string
  - lowercase minor words and split into an array
  - split string by word
  - iterate through the array
    - if the index is 0:
      - uppercase the first letter (helper?)
    - check if it's in the minor words array
    - if it is:
      - continue
    - if it isn't uppercase the first letter

Helper algorithm:
  - take as input the word
  - return the word with an uppercased first character
*/

function titleCase(title, minorWords) {
  if (!title) return '';
  title = title.toLowerCase();
  if (minorWords) {
    minorWords = minorWords.toLowerCase().split(' ');
  } else {
    minorWords = '';
  }

  return title.split(' ').map((word, index) => {
    if (index === 0 || !minorWords.includes(word)) {
      return upperCaseFirst(word);
    }
    return word;
  }).join(' ');
}

function upperCaseFirst(word) {
  return word[0].toUpperCase() + word.slice(1);
}

console.log(titleCase('') === '');
console.log(titleCase('a clash of KINGS', 'a an the of') === 'A Clash of Kings');
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In') === 'The Wind in the Willows');
console.log(titleCase('the quick brown fox') === 'The Quick Brown Fox');
