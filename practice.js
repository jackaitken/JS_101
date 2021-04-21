const textObject = {
  text: "Remove occurances of the letter e after the word 'letter' in this sentence"
};

Object.freeze(textObject);

// My code below

let textStr = Object.values(textObject).join('');
const regex = /e/g;

let resultStr = textStr.slice(0, 31) + textStr.slice(32).replace(regex, '');
console.log(resultStr);

