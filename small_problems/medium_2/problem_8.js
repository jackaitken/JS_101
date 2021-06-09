/* eslint-disable max-lines-per-function */

/*
Given a string, we need to find and return the longest sentence
contained within that string. Longest is defined by number of words

A sentence is defined as ending with either a . ! or ?.

Rules:
  - We have to preserve punctuation
  - Any character that is not a space or sentence ending character
    should be treated as a word

Algorithm:
  - create result arr
  - create a sentence arr
  - split the string by word
  - for each word check if the word contains a sentence ender (helper)
  - if it does:
    - push that word to the sentence arr
    - join that sentence and push it to the result arr
    - set sentence arr = []
  else:
    - push word to sentence arr
*/

function longestSentence(string) {
  let counter = 0;
  let longest = 0;
  let longestSent;
  let workingSentence = [];

  string.split(' ').forEach(word => {
    if (detectSentenceEnder(word)) {
      workingSentence.push(word);
      counter += 1;
      if (counter > longest) {
        longest = counter;
        longestSent = [...workingSentence];
      }
      counter = 0;
      workingSentence = [];
    } else {
      workingSentence.push(word);
    }
  });
  return longestSent.join(' ');
}

function detectSentenceEnder(word) {
  const sentenceEnders = ['.', '!', '?'];
  return word.split('').some(char => sentenceEnders.includes(char));
}


console.log(longestSentence("To be or not to be! Is that the question?"));
