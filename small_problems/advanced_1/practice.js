/*
Given an array of strings
determine which characters occur in all strings

Rules:
  - this includes duplicates
    - so with this:
      'bella', 'roller', 'label'
    - 'l' occurs twice in each string so it should
      be included twice in the returned matches
  - lowercase only

['bella', 'label', 'roller']

What if we used the first string as a working
string

we could start with the first char
iterate through the rest of the strings
and check if that character exists in the
other strings

if it does we should remove that character from the other strings


Algorithm:
  - shift out first array element as our compareString
  - let commons = []
  - iterate through compare string:
    - use ith character as compare char
    - counter = 0
    - iterate through rest of array:
      - if comparechar is in string
        - splice that out of the string
        - counter += 1;
    - if counter == array.length
      - push comparechar to commons

*/

function commonChars(array) {
  let compareString = array.shift();
  let commons = [];

  compareString.split('').forEach(char => {
    let counter = 0;
    array.forEach(word => {
      if (word.includes(char)) {
        let index = word.indexOf(char);
        word = removeChar(word, index);
        counter += 1;
      }
    });
    if (counter === array.length) {
      commons.push(char);
    }
  });
  return commons;
}


function removeChar(string, index) {
  let strArr = string.split('');
  strArr.splice(index, 1);
  return strArr.join('');
}

console.log(commonChars(['a', 'b'])); //[]
console.log(commonChars(['ab', 'bc'])); //['b']
console.log(commonChars(['bella', 'label', 'roller'])); //['e', 'l', 'l']
console.log(commonChars(['cool', 'lock', 'cook'])); //['c', 'o']
console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])); //['o']
console.log(commonChars(['aabbaaa', 'ccdddddd', 'eeffee', 'ggrrrrr', 'yyyzzz'])); //[]
