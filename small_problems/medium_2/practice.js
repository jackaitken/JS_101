/*
We need to transpose an matrix.

For example:

this input:
  matrix = [
    [1, 5, 8],
    [4, 7, 2],
    [3, 9, 6]
  ];

would return:
[
  [1, 4, 3],
  [5, 7, 9],
  [8, 2, 6]
]

So we construct each new array by taking the values that occupy the same index
in every array

so the elements at [0][0], [2][2] and [1][1] don't change

The element at [0][1] becomes the element at [1][0]
[0][2] becomes [2][0]
[1][0] becomes [0][1]
[2][0] becomes [0][2]

and so on

Algorithm:
  - we need to create a copy of the array
  - then we need to iterate through that copy using a nested loop
    - at each index ij we should swap i and j

*/

function transpose(matrix) {
  return matrix.map((row, rowIndx) => {
    return row.map((_, colIndx) => {
      return matrix[colIndx][rowIndx];
    });
  });
}

let matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

console.log(transpose(matrix));
console.log(matrix);