function featured(num) {
  const MAX_POSSIBLE_NUM = 9876543201;
  if (num >= MAX_POSSIBLE_NUM) {
    return "There is no possible number that fulfills those requirements.";
  }

  if (num % 2 === 0) {
    num += 1;
  } else {
    num += 2;
  }

  while (true) {
    if (uniqueNums(num) && (num % 7 === 0)) {
      return num;
    }
    num += 2;
  }
}

function uniqueNums(num) {
  let strNum = String(num);

  return strNum.split('').every((elem, index, array) => {
    debugger;
    return array.indexOf(elem) === index;
  });
}

console.log(featured(12) === 21);
console.log(featured(20) === 21);
console.log(featured(21) === 35);
console.log(featured(997) === 1029);
console.log(featured(1029) === 1043);
console.log(featured(999999) === 1023547);
console.log(featured(999999987) === 1023456987);
console.log(featured(9876543186) === 9876543201);
console.log(featured(9876543200) === 9876543201);
console.log(featured(9876543201) === "There is no possible number that fulfills those requirements.");
