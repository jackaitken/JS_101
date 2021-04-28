const readline = require('readline-sync');
let date = new Date();
let year = date.getFullYear();

console.log('What is your age?');
let curAge = readline.prompt();

console.log('At what age would you like to retire?');
let retireAge = readline.prompt();

let yearsToWork = retireAge - curAge;

console.log(`It's ${year}. You will retire in ${year + yearsToWork}.`);
console.log(`You have only ${yearsToWork} years of work to go!`);
