function nextBigger(n) {
  let workingNum = n;
  while (true) {
    workingNum += 1;
    if (sameDigits(n, workingNum)) {
      break;
    }
  }
  return workingNum;
}

function sameDigits(num1, num2) {
  let num1Arr = String(num1).split('').map(Number).sort((a, b) => a - b);
  let num2Arr = String(num2).split('').map(Number).sort((a, b) => a - b);

  return num1Arr.join('') === num2Arr.join('');
}

console.log(nextBigger(9876543210));