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

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"
