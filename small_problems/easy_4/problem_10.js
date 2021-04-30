let swap = string => {
  let textArr = string.split(' ');

  let reverseArr = textArr.map(word => {
    return word.split('').reverse().join('');
  });

  return reverseArr.join(' ');
};

console.log(swap('Oh what a wondeful day it is'));
console.log(swap('a'));
console.log(swap('Abcde'));