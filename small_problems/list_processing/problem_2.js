const alphabeticNumberSort = arr => {
  let arrMap = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
    'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
    'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];

  let alphaNumArr = arr.map(elem => {
    return arrMap[elem];
  }).sort();

  return alphaNumArr.map(elem => {
    return arrMap.indexOf(elem);
  });
};

console.log(alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));

