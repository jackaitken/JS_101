// Create an object that expresses the frequency with which each
// letter occurs in this string:

let statement = "The Flintstones Rock";

let charObj = {};

statement.split('').forEach(char => {
  if (char !== ' ') {
    if (char in charObj) {
      charObj[char] += 1;
    } else {
      charObj[char] = 1;
    }
  }
});

console.log(charObj);