let method1 = arr => arr.slice().reverse();

let method2 = arr => arr.slice().sort((num1, num2) => {
  return num2 - num1;
});

let spreadMethod = arr => [...arr].sort((num1, num2) => {
  return num2 - num1;
});

let numbers = [1, 2, 3, 4, 5];
let newNumbers = [];

numbers.forEach(num => newNumbers.unshift(num));

console.log(numbers);
console.log(newNumbers);
