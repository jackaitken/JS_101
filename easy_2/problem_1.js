// Given a string, return a new string that replaces
// every occurrence of the word "important" with "urgent":

/*
The operative word in the description is 'every'. String.prototype.replace()
will stop after the first occurance is found, therefore if we provide
a regex with the global flag as the first agrument in the replace, we
can find every occurance.
*/

let replaceWord = str => {
  let regex = /important/g;
  return str.replace(regex, 'urgent');
};

let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(replaceWord(advice));