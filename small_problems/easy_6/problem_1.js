const repeater = str => {
  let repeatArr = str.split('').map(char => {
    return char.repeat(2);
  });
  return repeatArr.join('');
};

console.log(repeater('Hello'));