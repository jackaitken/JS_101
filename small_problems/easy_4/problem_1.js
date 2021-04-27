let getRandAge = (min, max) => {
  const RANGE = (max - min) + 1;

  let randAge = Math.floor((Math.random() * RANGE) + min);
  return randAge;
};

let age = getRandAge(120, 20);

console.log(`Teddy is ${age} years old!`);