let digitList = num => {
  return String(num).split('').map(num => {
    return Number(num);
  });
};

console.log(digitList(12345));