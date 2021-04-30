let alphaOnly = word => {
  let wordArr = word.toLowerCase().split('');
  return wordArr.filter(letter => letter >= 'a' && letter <= 'z').join('');
};

let wordSizes = text => {
  let lengthObj = {};

  if (!text) return {};

  text.split(' ').forEach(word => {
    word = alphaOnly(word);
    if (lengthObj[word.length]) {
      lengthObj[word.length] += 1;
    } else {
      lengthObj[word.length] = 1;
    }
  });
  return lengthObj;
};

console.log(wordSizes('Four score and seven.'));  // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));        // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));