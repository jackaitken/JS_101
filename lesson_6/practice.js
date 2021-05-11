const EMPTY_SQUARE = ' ';

function getCpuMove(board) {
  let validMoves = board.map((row, rowIndx) => {
    return row.reduce((arr, elem, colIndx) => {
      if (elem === EMPTY_SQUARE) {
        arr.push(rowIndx, colIndx);
      }
      return arr;
    }, []);
  });
  return validMoves;

  // let randIndx = Math.floor(Math.random() * validMoves.length);
  // return validMoves[randIndx];
}

let board = [
  [' ', 'X', ' '],
  [' ', 'O', 'X'],
  [' ', ' ', ' ']
];

console.log(getCpuMove(board));