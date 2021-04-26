/*
PEDAC

Understand the problem
  Input:
    string possibly containing consecutive duplicate characters
  Output:
    new string with consecutive duplicate characters removed

  Explicit rules:
    - the returned string should not have any consecutive duplicate
      characters
    - if it does then we should collapse those duplicate characters
      into one single character.
  
  ALGORITHM
    - set an empty string variable
    - iterate through the string checking the characer at the current
      index.
    - if the current character is equal to the last character in the
      result string, then we should do nothing
    - else we should append the current character.
    - return the result string
*/

let crunch = string => {
  let collapsedString = '';

  string.split('').forEach(char => {
    if (char !== collapsedString[collapsedString.length - 1]) {
      collapsedString += char;
    }
  });

  return collapsedString;
};

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""