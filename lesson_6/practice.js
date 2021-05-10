const EMPTY_SQUARE = ' ';

function getCpuMove(board) {
  let validMoves = [];

  board.forEach((row, rowIndx) => {
    row.forEach((cell, colIndx) => {
      if (cell === EMPTY_SQUARE) {
        validMoves.push([rowIndx, colIndx]);
      }
    });
  });
  let randIndx = Math.floor(Math.random() * validMoves.length);
  return validMoves[randIndx];
}

let board = [
  [' ', 'X', ' '],
  [' ', 'O', 'X'],
  [' ', ' ', ' ']
];

setTimeout(() => getCpuMove(board), 500);