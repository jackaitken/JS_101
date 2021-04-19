let stringToInteger = str => {
  const NUMS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };

  let mappedArr = str.split('').map(char => NUMS[char]);

  let value = 0;
  mappedArr.forEach(num => (value = (value * 10) + num));

  return value;
};


let stringToSignedInteger = str => {

  let splitStr = str.split('');
  let negative;

  if (splitStr[0] === '-') {
    negative = splitStr.shift();
  } else if (splitStr[0] === '+') {
    splitStr.shift();
  }

  let numValue = stringToInteger(splitStr.join(''));

  return negative ? 0 - numValue : numValue;
};

console.log(stringToSignedInteger("4321") === 4321);
console.log(stringToSignedInteger("-570") === -570);
console.log(stringToSignedInteger("+100") === 100);