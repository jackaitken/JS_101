let stringy = num => {
  let resultString = '';
  let oneOrZero = 1;

  for (let i = 0; i < num; i++) {
    resultString += oneOrZero;
    oneOrZero = oneOrZero === 1 ? 0 : 1;
  }
  return resultString;
};

console.log(stringy(8));