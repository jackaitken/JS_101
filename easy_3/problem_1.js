// Write three different ways to remove all of the 
// elements from the following array:

let numbers = [1, 2, 3, 4];

numbers.splice(0, numbers.length);

while (numbers.length !== 0) {
  numbers.pop();
}

while (numbers.length !== 0) {
  numbers.shift();
}

numbers.length = 0;