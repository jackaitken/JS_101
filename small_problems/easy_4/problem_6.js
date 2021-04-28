let isPalindromicNumber = num => {
  let stringNum = String(num);
  let reversedNum = stringNum.split('').reverse().join('');

  return stringNum === reversedNum;
};

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true

/*
we can't index or iterate over numbers
we might have to split this into a string
can't we just turn this into a sting, reverse it and then check
it's equality on a the original number in string format?

*/