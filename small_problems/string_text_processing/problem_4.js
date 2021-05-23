let wordCap = str => {
  return str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

console.log(wordCap('the javaScript language'));