const reverseWords = string => {
  let wordArr = string.split(' ');
  let reverseArr = wordArr.map(word => {
    if (word.length > 4) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  });
  return reverseArr.join(' ');
};

console.log(reverseWords('Professional'));
console.log(reverseWords('Walk around the block'));
console.log(reverseWords('Launc School'));