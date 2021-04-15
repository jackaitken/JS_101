// We need to swap the case of each letter in the below sentence.

let munstersDescription = "The Munsters are creepy and spooky.";
let newStr = '';

for (let i in munstersDescription) {
  let curLetter = munstersDescription[i];
  let oppLetter = curLetter === curLetter.toUpperCase() ?
    curLetter.toLowerCase() : curLetter.toUpperCase();
  newStr += oppLetter;
}

console.log(newStr);