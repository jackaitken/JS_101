let isAlphabetic = char => {
  return char >= 'a' && char <= 'z';
};

let cleanUp = str => {
  let resultStr = '';

  for (let i of str) {
    if (isAlphabetic(i.toLowerCase())) {
      resultStr += i;
    } else if (resultStr[resultStr.length - 1] !== ' ') {
      resultStr += ' ';
    }
  }
  return resultStr;
};

console.log(cleanUp("---what's my +*& line?"));