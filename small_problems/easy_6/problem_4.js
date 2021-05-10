const centerOf = str => {
  let half = Math.floor(str.length / 2);

  if (str.length % 2 === 0) {
    return str.slice(half - 1, half + 1);
  } else {
    return str[Math.floor(half)];
  }
};

console.log(centerOf('I love JavaScript'));
console.log(centerOf('Launch School'));
console.log(centerOf('Launch'));
console.log(centerOf('Launchschool'));
console.log(centerOf('x'));
