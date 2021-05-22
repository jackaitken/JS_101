function substrings(str) {
  let substringArr = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substringArr.push(str.slice(i, j));
    }
  }
  return substringArr;
}

function palindromes(str) {
  let substrs = substrings(str);

  return substrs.filter(string => {
    let revStr = string.split('').reverse().join('');
    return revStr === string && string.length > 1;
  });
}

console.log(palindromes('knitting cassettes'));