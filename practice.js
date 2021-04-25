let twoNumberSum = (arr, target) => {
  let reciprocalObj = {};

  arr.forEach(num => {
    reciprocalObj[num] = target - num;
  });

  console.log(reciprocalObj);
  console.log(Object.values(reciprocalObj));

  Object.values(reciprocalObj).includes()
};


let numbers = [1, 2, 3, 9];
let numbers1 = [1, 2, 4, 4];

console.log(twoNumberSum(numbers1, 8));