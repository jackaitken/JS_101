let integerToString = num => {
  const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let numStr = '';

  do {
    let remainder = num % 10;
    num = Math.floor(num / 10);

    numStr = NUMS[remainder] + numStr;
  } while (num > 0);
  return numStr;
};

let signedIntegerToString = num => {
  switch (Math.sign(num)) {
    case 1:
      return `+${integerToString(num)}`;
    case -1:
      return `-${integerToString(-num)}`;
    default:
      return `${integerToString(num)}`;
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0));
console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-4321));