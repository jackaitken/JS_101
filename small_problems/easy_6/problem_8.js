const sequence = (count, num) => {
  if (count === 0) {
    return [];
  } else if (num === 0) {
    return [...Array(count)].fill(0);
  }

  let arr = [];

  for (let i = num; arr.length < count; i += num) {
    arr.push(i);
  }
  return arr;
};

// OR

const sequence1 = (count, num) => {
  let arr = [];

  for (let i = 1; i <= count; i++) {
    arr.push(i * num);
  }
  return arr;
};

console.log(sequence1(5, 1));
console.log(sequence1(4, -7));
console.log(sequence1(3, 0));
console.log(sequence1(0, 1000000));

/*
We take two numbers as input:
  a count which represents the size of our integer
  and a starting number, which is where our return array will start
we need to output:
  an array of length count, where every element is a multiple of the 
  starting number
*/