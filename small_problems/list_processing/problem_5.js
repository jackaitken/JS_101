let substrings = str => {
  let subtrs = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      subtrs.push(str.slice(i, j));
    }
  }
  return subtrs;
};


console.log(substrings('abcde'));