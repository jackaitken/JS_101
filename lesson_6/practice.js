
let board = [
  ['X', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

function getAvailableMoves(board) {
  let validMoves = [];

  board.forEach((row, rowIndx) => {
    row.forEach((cell, colIndx) => {
      if (cell === ' ') {
        validMoves.push([rowIndx, colIndx]);
      }
    });
  });
  return findMiddleSquare(validMoves);
}

function findMiddleSquare(availableMoves) {
  const EMPTY_SQUARE = '11';

  for (let pair of availableMoves) {
    let [num1, num2] = pair;

    if (String(num1) === EMPTY_SQUARE[0] && String(num2) === EMPTY_SQUARE[1]) {
      return true;
    }
  }
  return false;
}

console.log(getAvailableMoves(board));