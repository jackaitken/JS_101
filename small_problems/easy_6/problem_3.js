const reverseNumber = num => {
  let stringNum = String(num);
  let reversedNum = stringNum.split('').reverse().join('');
  return Number(reversedNum);
};

console.log(reverseNumber(12345));
console.log(reverseNumber(12213));
console.log(reverseNumber(456));
console.log(reverseNumber(12000));