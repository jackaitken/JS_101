let wordLengths = str => {
  if (!str) return [];
  return str.split(' ').map(word => {
    return `${word} ${word.length}`;
  });
};

console.log(wordLengths(''));