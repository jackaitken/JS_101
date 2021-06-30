// /*
// The most common letter

// Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.

// If such letters are two or more, choose the one that appears in the string( earlier.

// For example:

// ('my mom loves me as never did', 't') => 'ty tot loves te as never did'
// ('real talk bro', 'n') => 'neal talk bno'
// ('great job go ahead', 'k') => 'grekt job go khekd'







// input: string 
// - string of letters and spaces

// output: string 
// - string with replaced letter 


// Rules:
//   - lowercase always
//   - more than 2 words
//   - always replace the earlier character in the string
  
// Examples 
// 'real talk bro'

// 'hello', 'h'

// {h: 1, e: 1, l: 2, o: 1}

// 'hehho'


// Mental Model 
// 1. Find the most common letter in the string  
// 2. Replace it with the letter (arg 2)


// Algorithm:
//   - create empty obj var
//   - iterate through the string
//     - add each char's frequency to the obj
  
//   - set var counter = 0
//   - set var maxChar = ''
//   - iterate through the string
//     - find the cur char's frequency
//     - if it's greater than the counter
//       - reassign our maxChar
//       - set our counter = to the frequency of that char
    

// */

function replaceCommon(string, letter) {
  let frequencyObj = {};

  string.split('').forEach(char => {
    if (char >= 'a' && char <= 'z') {
      if (frequencyObj[char]) {
        frequencyObj[char] += 1;
      } else {
        frequencyObj[char] = 1;
      }
    }
  });
  let maxChar = getMostFrequent(string, frequencyObj);
  let regex = new RegExp(maxChar, 'g');
  return string.replace(regex, letter);
}

function getMostFrequent(string, obj) {
  let counter = 0;
  let maxChar = '';

  string.split('').forEach(char => {
    if (obj[char] > counter) {
      maxChar = char;
      counter = obj[char];
    }
  });
  return maxChar;
}


// console.log(replaceCommon('my mom loves me as never did', 't'));
// // 'ty tot loves te as never did'


// console.log(replaceCommon('real talk bro', 'n'));
// // 'neal talk bno'

// console.log(replaceCommon('great job go ahead', 'k'));
// // 'grekt job go khekd'

// console.log(replaceCommon('yyyaaa twwww ttt uuu ccca', 'p'));
// // 'yyyppp twwww ttt uuu cccp'



// /*
// Dashatize it before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return an empty value.

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

// input:
//   number
// output:
//   string containing dashes
  
// Mental Model:
//   For a given number n, find the odd numbers in the number
//   add a dash to the beginning and end of that odd number
  
// Rules:
//   - output string should NOT begin or end with a dash
//   - Negative numbers should be converted to positive numbers
//   - 0 returns 0
//   - NaN returns NaN
  
// Examples:

// 974302

// 9-7-4-3-02

// 9-84-5

// 86320


  
// Algorithm:
//   - convert negative numbers to positive
//   - set an empty string var
//   - convert the input to a String
//   - iterate through the string of digits
//     - check if digit is odd
//       - if index is 0
//         - add the digit + '-' to the resultStr
//       - if it's the last index
//       - if the the last char in the resultStr is
//         a hyphen:
//         - add the number + '-'
//     - else:
//       - add the digit to the string
      
  

// */

function dashatize(num) {
  num = Math.abs(num);
  if (Number.isNaN(num)) return 'NaN';
  let strNum = String(num);
  if (strNum.length === 1) return String(num);
  let dashedString = '';

  strNum.split('').forEach((num, index) => {
    if (Number(num) % 2 !== 0) {
      if (dashedString[dashedString.length - 1] === '-') {
        dashedString += `${num}-`;
      } else {
        dashedString += `-${num}-`
      }
    } else {
      dashedString += num;
    }
  });
  let fixedString = checkFirstChar(dashedString);
  return checkForEndChar(fixedString);
}

function checkForEndChar(string) {
  if (string[string.length - 1] === '-') {
    return string.slice(0, string.length - 1);
  }
  return string;
}

function checkFirstChar(string) {
  if (string[0] === '-') {
    return string.slice(1);
  }
  return string;
}

// console.log(dashatize(274)); //  "2-7-4", "Should return 2-7-4"
// console.log(dashatize(5311)); // "5-3-1-1", "Should return 5-3-1-1"
// console.log(dashatize(86320)); // "86-3-20", "Should return 86-3-20"
// console.log(dashatize(974302)); // "9-7-4-3-02", "Should return 9-7-4-3-02"
// console.log(dashatize(NaN)); // "NaN", "Should return NaN
// console.log(dashatize(0)); //, "0", "Should return 0"
// console.log(dashatize(-1)); // , "1", "Should return 1"
// console.log(dashatize(-28369)); // , "28-3-6-9", "Should return 28-3-6-9"



function twoSum(numbers, target) {
  let complimentObj = {};

  numbers.forEach((num, index) => {
    complimentObj[target - num] = index;
  });

  for (let i = 0; i < numbers.length; i++) {
    let compNumber = target - numbers[i];
    let compIndex = numbers.indexOf(compNumber);
    if (compIndex === i || compIndex < 0) {
      continue;
    } else {
      return [i, compIndex].sort((a, b) => a - b);
    }
  }
}


// console.log(twoSum([1, 2, 3], 4)); // [0, 2]
// console.log(twoSum([1234,5678,9012], 14690)); // [1,2]
// console.log(twoSum([2,2,3], 4)); // [0,1]

// /*
// Highest Rank Number in an array (6 kyu) 

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// input:
//   array of numbers
// output:
//   the number which occurs most frequently
  
// Rules:
//   - if there are two or more numbers, which appear the same amount of     times return the larger of those numbers
  
// Example:
// [ 12, 10,  8, 12, 7,  6,  4, 10, 12] ==> 12

// [1, 1, 4, 5, 6, 7, 8 ,8]

// 1 and 8 appear the same amount of times
// 8 should be returned because it's the largest


// MM:
//   Given an input array return the number, which appears most
//   frequently in the input array. If there is more than one the     appears a certain amount of times, return the largest of those
  
// Algorithm:
//   - set a var frequencyObj
//   - iterate through our input numbers (helper)
//     - populate frequencyObj with the occurances of that number
    
//   - set var counter = 0;
//   - set var highest = [];
  
//   - iterate through the array again
//     - check the value in the object stored at each key
//     - if it's equal to the counter
//       - append that number to the highest arr
//     - if it's greater than counter
//       - set counter to the frequency
//       - reassign highest to [num]
    
//     - find the max number inside highest
    

// */

function highestRank(arr) {
  let frequencyObj = getFrequencies(arr);
  let counter = 0;
  let highest = [];
  
  arr.forEach(num => {
    if (frequencyObj[num] === counter) {
      highest.push(num);
    } else if (frequencyObj[num] > counter) {
      counter = frequencyObj[num];
      highest = [num];
    }
  });
  
  return Math.max(...highest);
}

function getFrequencies(arr) {
  let frequencyObj = {};
  
  arr.forEach(num => {
    if (frequencyObj[num]) {
      frequencyObj[num] += 1;
    } else {
      frequencyObj[num] = 1;
    }
  });
  
  return frequencyObj;
}


// console.log(highestRank([ 12, 10,  8, 12, 7,  6,  4, 10, 12])); // 12 
// console.log(highestRank([ 12, 10,  8, 12, 7, 6,  4, 10, 10]));  // 10
// console.log(highestRank([ 12, 10, 8, 8,  3,  3, 3,  3, 2, 4, 10, 12, 10])); // 3


/*
Given object of keys and values
the keys are digits (strings)

the values are arrays containing strings

We need to return a new table with the same keys
but where a char only appears once in each key's value

(iterating through array to remove duplicates)

If two keys contain the same char, then we should compare them numerically
the larger of the keys should retain that character

Algorithm for first part:
  - create empty object
  - iterate through object keys
    - for each key's value
    - remove the duplicates
    - add those value to the new object under the key name

Now we need to remove elements from lesser keys that
are in higher keys

{
  "1": ["A", "B", "C"],
  "2": ["A", "B", "D", "A"],
}

nested array to check each element against the other
values of the other keys

Algorithm for second part:
  - starting with first key's value
    - iterate through the other keys
    - if that element exists in the other key's array
      - remove it from the current array


['a', 'b', 'c']
['a', 'b', 'c']

*/
const removeDuplicateIds = (obj) => {
  let resultObj = {};

  let sortedKeys = Object.keys(obj).sort((a, b) => b - a);
  let seen = [];

  sortedKeys.forEach(key => {
    let newVal = [];
    obj[key].forEach(elem => {
      if (!seen.includes(elem)) {
        newVal.push(elem);
        seen.push(elem);
      }
    });
    resultObj[key] = newVal;
  });
  return resultObj;
};


let obj = {
  1: ["C", "F", "G"],
  2: ["A", "B", "C"],
  3: ["A", "B", "D"],
};


console.log(removeDuplicateIds(obj));
