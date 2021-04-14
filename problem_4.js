function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) return false;
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }
  return true;
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

console.log(isDotSeparatedIpAddress('155.255.65.89'));
console.log(isDotSeparatedIpAddress('255.255.255.255'));
console.log(isDotSeparatedIpAddress('1.1.1.1'));
console.log(isDotSeparatedIpAddress('1.256.4.89'));
console.log(isDotSeparatedIpAddress('255.65.89'));
console.log(isDotSeparatedIpAddress('155.255.65.89.80'));
