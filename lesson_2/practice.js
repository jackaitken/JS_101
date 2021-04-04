let oddElements = arr => {
  let oddArr = [];
  let iterator = 1;

  while (iterator < arr.length) {
    oddArr.push(arr[iterator]);
    iterator += 2;
  }
  return oddArr;
};

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(oddElements(arr));