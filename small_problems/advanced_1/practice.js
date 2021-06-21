const longestRepetition = s => {
  let max = 0;
  let char = ''; 
  for (let i = 1, l = s.length, c = 1; i <= l; i++) {
    if (s[i] === s[i - 1]) c++;
    else {
      if (c > max) {
        max = c;
        char = s[i - 1];
      }
      c = 1;
    }
  }
  return [char, max];
}

console.log(longestRepetition('aaabccccccddd'));