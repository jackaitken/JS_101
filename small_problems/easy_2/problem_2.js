/*
understand the problem

  inputs and outputs:
    INPUT:
      string, with or without an '!'
    OUTPUT:
      string that responds with either all caps or not.
*/

let readline = require('readline-sync');

console.log('What is your name?: ');
let name = readline.prompt();

if (name.endsWith('!')) {
  name = name.slice(0, -1).toUpperCase();
  console.log(`HELLO ${name}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}