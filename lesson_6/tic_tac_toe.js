const readline = require('readline-sync');
const EMPTY_SQUARE = ' ';
const HUMAN_MARKER = 'X';
const CPU_MARKER = '0';
let currentPlayer = HUMAN_MARKER;
let board = initializeBoard();

function prompt(msg) {
  console.log(`=> ${msg}`);
}

while (true) {
  console.clear();
  displayBoard(board);

  prompt(`${currentPlayer}'s move`);
  let row = getPlayerMove('row');
  let column = getPlayerMove('column');

  while (!isEmpty(row, column, board)) {
    prompt('Please select an empty square');
    row = getPlayerMove('row');
    column = getPlayerMove('column');
  }

  board[row][column] = HUMAN_MARKER;

  let [cpuRow, cpuCol] = getCpuMove(board);
  board[cpuRow][cpuCol] = CPU_MARKER;
  console.clear();

  displayBoard(board);
  prompt(`Computer chose row ${cpuRow + 1}, column ${cpuCol + 1}`);
  prompt('Press enter to continue');
  readline.prompt();
}

function initializeBoard() {
  return [
    Array(3).fill(EMPTY_SQUARE),
    Array(3).fill(EMPTY_SQUARE),
    Array(3).fill(EMPTY_SQUARE)
  ];
}

function displayBoard(boardState) {
  console.log('');
  console.log('     1     2     3');
  console.log(`        |     |`);
  console.log(`1    ${boardState[0][0]}  |  ${boardState[0][1]}  |  ${boardState[0][2]}`);
  console.log(`        |     |`);
  console.log(`   -----+-----+-----`);
  console.log(`        |     |`);
  console.log(`2    ${boardState[1][0]}  |  ${boardState[1][1]}  |  ${boardState[1][2]}`);
  console.log(`        |     |`);
  console.log(`   -----+-----+-----`);
  console.log(`        |     |`);
  console.log(`3    ${boardState[2][0]}  |  ${boardState[2][1]}  |  ${boardState[2][2]}`);
  console.log(`        |     |`);
  console.log('');
}

function getPlayerMove(colRow) {
  prompt(`Select a ${colRow}`);
  let move = readline.question('> ').trim();

  while (!validMove(move)) {
    prompt(`Select a ${colRow}`);
    move = readline.question('> ').trim();
  }
  return move - 1;
}

function validMove(move) {
  if (move >= 1 && move <= 3) {
    return Number.isInteger(Number(move));
  }
  return false;
}

function isEmpty(row, column, board) {
  return board[row][column] === EMPTY_SQUARE;
}

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


