const alphabeticNumberSort = arr => {
  let arrMap = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
    'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
    'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];

  let alphaNumArr = arr.map((_, index) => {
    return arrMap[index];
  }).sort();

  return alphaNumArr.map()
};

console.log(alphabeticNumberSort([1, 2, 3, 4]));

