// show two different ways to put the expected "Four score and " 
// in front of the string below.

let insertWords = str => 'Four score and ' + str;

let famousWords = "seven years ago...";

console.log('Four score and '.concat(famousWords));

console.log(insertWords(famousWords));

