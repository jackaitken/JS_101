function isVowel(char) {
  const VOWELS = 'aeiou';
  return VOWELS.includes(char.toLowerCase());
}

function removeVowels(arr) {
  return arr.map(substr => {
    return substr.split('').filter(char => {
      return !isVowel(char);
    }).join('');
  });
}

console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));