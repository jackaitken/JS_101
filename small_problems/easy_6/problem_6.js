const sequence = num => {
  let arr = [...Array(num).keys()];
  arr.shift();
  arr.push(num);
  return arr;
};

const sequence1 = num => {
  let arr = [];

  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
};

console.log(sequence1(5));
