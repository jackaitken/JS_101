// Return a new version of this sentence that ends just before
// the word house. Don't worry about spaces or punctuation:
// remove everything starting from the beginning of house to the
// end of the sentence.

let removeAfterHouse = str => str.slice(0, str.indexOf('house'));

let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(removeAfterHouse(advice));