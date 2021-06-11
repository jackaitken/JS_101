/*
1. Create a function that takes two arguments: starting number and end number and returns an array with numbers starting from `startNumber` and ending on `endNumber`
console.log(range(1, 5)); // [1, 2, 3, 4, 5]
*/

function range(n) {
  return Array(n).fill(0).map((_, index) => index + 1);
}

// console.log(range(5));

/*
2. Create a function that takes a string as an argument and returns a number
representing number of words that occurred more than once in that string, for example:
console.log(getWordCount([ 'one', 'two', 'one', 'three', 'two' ]))
console.log(getWordCount([ 'flower', 'cat', 'cat', 'dog', 'flower', 'dog' ]))
*/

function getWordCount(str) {
  return str.split(' ').reduce((acc, elem, index, array) => {
    if (array.indexOf(elem) !== index) {
      acc += 1;
    }
    return acc;
  }, 0);
}

// console.log(getWordCount('flower cat cat dog flower dog'));
/*
3. Create a function that takes an array as an argument and
returns an new array containing all of the array elements that appears twice, for example:
console.log(appearTwice([1, 2, undefined, 'hello', 2, undefined])); //=> [2, undefined];
console.log(appearTwice([1, 1, 2, 2, 3, 4, 4, 4, undefined, undefined])); // [1,2, undefined]
console.log(appearTwice([1, 1, 'bye', 'bye', 4, 4, 4, undefined, undefined])); // [1, 'bye', undefined]
*/

function appearTwice(arr) {
  let freqObj = arr.reduce((obj, elem) => {
    obj[elem] === 1 ? obj[elem] += 1 : obj[elem] = 1;
    return obj;
  }, {});

  let filteredArr = Object.keys(freqObj).filter(key => {
    return freqObj[key] === 2;
  });
  return filteredArr.map(elem => {
    if (Number.isNaN(Number(elem))) {
      return elem;
    }
    return Number(elem);
  });
}

// console.log(appearTwice([1, 2, undefined, 'hello', 2, undefined])); //=> [2, undefined];
// console.log(appearTwice([1, 1, 2, 2, 3, 4, 4, 4, undefined, undefined])); // [1,2, undefined]
// console.log(appearTwice([1, 1, 'bye', 'bye', 4, 4, 4, undefined, undefined])); // [1, 'bye', undefined]

/*
4. Create a function that takes an array of objects as argument and return the 
same array with all the elements sorted according to it's value in ascending order. 
For example: function sorting(array) {}

sorting([{a: 1}, {a: 0}, {a : 3}]); //=> [{a:0}, {a:1}, {a:3}];

Algortithm:
  - iterate through array

*/
function sorted(arr) {
  return arr.sort((a, b) => {
    return a.a - b.a;
  });
}

// console.log(sorted([{a: 1}, {a: 0}, {a : 3}]));


/*

// 5. Create a function that takes a string as an argument and returns an array with all leading sub-strings of that string. For example:
//allLeadSubstr('abcd'); // => ['a', 'ab', 'abc', 'abcd'];

*/

function allLeadSubstr(str) {
  return str.split('').map((_, index, arr) => {
    return arr.slice(0, index + 1).join('');
  });
}

// console.log(allLeadSubstr('abcd'));

/*


// 6.
// A written work composed of words chosen to avoid the use of one or more letters.
 You may hail F. Scott Fitzgerald's Gatsby as great, but in 1939 Ernest Vincent Wright
produced the phenomenal Gadsby: A Story of Over 50,000 Words Without Using the letter "E," a
 scarcely believable achievement considering that "E" is the most common letter in English.
Imagine an entire novel without he, she, the, or the past tense marker —ed.

// Create a function that takes two strings as  arguments and return a boolean value if the
first string contains all of the letters of alphabet except the one that is the second argument. For example:
// isLipogram('abcdefghijklmnopqrstuvwxy', 'z'); //true
// isLipogram('abc', 'd'); //false

algorithm:
  - concatenate both strings to lower case
  - sort them
  - iterate through string
    - check if the current character is one greater than the last
    - if not return false
  - return true
*/

function isLipogram(str, letter) {
  let resultStr = str + letter;

  resultStr = resultStr.
    toLowerCase().
    split('').
    sort().
    join('').
    trim();

  if (!correctChars(resultStr)) {
    return false;
  }

  for (let i = 1; i <= resultStr.length; i++) {
    if (!resultStr[i] >= resultStr[i]) {
      return false;
    }
  }
  return true;
}

function correctChars(str) {
  return str[0].charCodeAt() === 97 &&
   str[str.length - 1].charCodeAt() === 122;
}

console.log(isLipogram("The quick brown fox jumps over Zugly the dog", 'a'));
console.log(isLipogram('abc', 'd'));

