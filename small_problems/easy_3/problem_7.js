let twice = num => {
  let stringNum = String(num);
  let half = stringNum.length / 2;
  let firstHalf = stringNum.slice(0, half);
  let secondHalf = stringNum.slice(half);

  if (firstHalf === secondHalf) {
    return num;
  } else {
    return num * 2;
  }
};


console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676