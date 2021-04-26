crunch = str => {
  return str.split('').map(char => char + char).join('');
};

console.log(crunch('daily double'));