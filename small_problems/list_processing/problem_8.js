let buyFruit = nestedArr => {
  return nestedArr.map(arr => {
    return Array(arr[1]).fill(arr[0]);
  }).flat();
};

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));