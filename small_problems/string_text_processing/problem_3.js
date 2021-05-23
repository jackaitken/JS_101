function letterCaseCount(str) {
  return str.split('').reduce((obj, elem) => {
    if (isAlpha(elem)) {
      if (isUpperCase(elem)) {
        obj.uppercase += 1;
      } else {
        obj.lowercase += 1;
      }
    } else {
      obj.neither += 1;
    }
    return obj;
  }, {lowercase: 0, uppercase: 0, neither: 0});
}

function isAlpha(char) {
  return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';
}

function isUpperCase(char) {
  return char === char.toUpperCase();
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }