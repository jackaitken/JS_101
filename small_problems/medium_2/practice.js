/*
input two numbers;
output either 1 or 0 depending on:
  - if in num1 there exists a substring of the same number that occurs
    3 times in a row
  AND
  - if in num2 there exists a substring of the same number from num1,
    but shown 2 times in a row

We'll first need to identify substrings.
finding all the substrings is and n^2 problem, so maybe we'll just iterate
through?

Algorithm:
  - convert number into string
  - split string
  - iterate over numbers.
    - check if the current num === nums[i - 1] && nums[- 2]
    - if so:
      save num
      check if double exists in num2
      if yes:
        return 1
      if not:
        - continue iterating thorugh num1
  return 0
*/

function tripleDouble(num1, num2) {
  let strNum = String(num1);

  for (let i = 0; i < strNum.length; i++) {
    if (strNum[i] === strNum[i - 1] && strNum[i] === strNum[i - 2]) {
      if (checkForDouble(num2, strNum[i])) {
        return 1;
      } else {
        continue;
      }
    }
  }
  return 0;
}

function checkForDouble(num2, num) {
  return String(num2).indexOf(num.repeat(2)) !== -1;
}

console.log(tripleDouble(451999277, 41177722899));
console.log(tripleDouble(1222345, 12345));
console.log(tripleDouble(12345, 12345));
console.log(tripleDouble(666789, 12345667));
