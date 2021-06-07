function rotateRightmostDigits(num, count) {
  let numArr = String(num).split('');
  let rotatedNum = numArr.splice((numArr.length - count), 1);
  numArr.push(rotatedNum);
  return Number(numArr.join(''));
}

console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);

/*
Given a number and a count, we need to remove the the element at number
at number.length - count and add it to the end

Algorithm:
  - numbers are immuatble so we should convert to a string and split
  - then we'll save the number at the length - count
  - remove it from the array
  - add it to the end
  - join the array
  - convert back to number
*/