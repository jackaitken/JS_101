// Using the following string, create a new string that contains all
// lowercase letters except for the first character, which should be
// capitalized. (See the example output.)

/*
One way to do this is to change the first character to upper case
and then concatenate the rest of the string, which we'll convert to lower
case. We'll do this by using the split() method from the 1st charater to the
last.
*/

let normString = str => {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

let munstersDescription = "the Munsters are CREEPY and Spooky.";

console.log(normString(munstersDescription));

