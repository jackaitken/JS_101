/*
Given a string as input we need to return a string that keeps the
first and last charcter where they are, but sorts the characters
in between alphabetically.

Rules
  - We need to keep punctuation in the same place
  - Words are separated by spaces
  - only spaces separate words
  - punctuation is limited to '-', ' ' ', ',' '.'
  - ignore captitalization
  - so we're sorting the word itself, not all the characters

Thoughts:
  - We to hold the beginning and end characters where they are
  - We then have to sort all of the words that come in between
  - The tough part will be keeping the punctuation.
  - Maybe we can have a helper that will take care of that

Algorithm:
  - if length of str <= 3 return str
  - split string and save first letter and last letter
  - join that new array as workingArr
  - split that array by words. We need to work off the word
  - for each word:
    - iterate through characters
    - check if 

*/

function scrambleWords(str) {
  if (str.length < 4) return str;

  let workingArr = str.split('');
  let first = workingArr.shift();
  let last = workingArr.pop();

  workingArr = workingArr.join('');

  let sortedWord = workingArr.split(' ').map(word => {
    if (detectPunctuation(word)) {
      let indexArr = getPuncuationIndex(word);
    }
    return word.split('').sort().join('');
  });
}

function detectPunctuation(word) {
  let punctuation = ['.', ',', "'", '-'];
  return word.split('').some(char => punctuation.includes(char));
}

function getPuncuationIndex(word) {
  
}



console.log(scrambleWords('professionals'));
// console.log(scrambleWords('i'));
// console.log(scrambleWords('me'));
// console.log(scrambleWords('card-carrying'));
