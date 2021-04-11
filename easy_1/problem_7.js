// Determine whether the name Dino appears in the strings below 
// -- check each string separately):

/*
We can simply use includes() to check if the given string has a word Dino 
in it.
*/

let str1 = "Few things in life are as important as housetraining your pet Dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

let findDino = str => str.includes('Dino');

console.log(findDino(str1));
console.log(findDino(str2));