function wordToDigit(string) {
  let digitWords = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
  ];

  return string.split(' ').map(word => {
    if (digitWords.includes(word)) {
      return digitWords.indexOf(word);
    }
    return word;
  }).join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));

/*
Given a string, we shold return a new string that contains the digits
of any number texts.

Algorithm:
  - set an array = ['zero', 'one',...'nine']
  - iterate through split string
  - if that words occurs in our array:
    - substitute that word for its index in the array
  - return the new array

  We need to be able to catch puncutation
*/