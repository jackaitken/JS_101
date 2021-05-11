const readline = require('readline-sync');
const EMPTY_SQUARE = ' ';
const HUMAN_MARKER = 'X';
const CPU_MARKER = '0';
let board = initializeBoard();

function prompt(msg) {
  console.log(`=> ${msg}`);
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

function getPlayerMove(rowCol) {
  while (true) {
    prompt(`Please choose a ${rowCol}`);
    let move = readline.question('> ').trim();

    if (validMove(move)) {
      move -= 1;
      return move;
    }
    prompt('Please use a valid number (1 - 3)');
  }
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

function isTie(board) {
  return board.every(row => {
    return row.every(cell => cell !== EMPTY_SQUARE);
  });
}

while (true) {
  console.clear();
  displayBoard(board);

  let row = getPlayerMove();
  let column = getPlayerMove();

  // Ensure that row and column are empty squares

  board[row][column] = HUMAN_MARKER;

  if (isTie(board)) {
    console.clear();
    displayBoard(board);
    return prompt('Game ended in a tie');
  }

  let [cpuRow, cpuCol] = getCpuMove(board);
  board[cpuRow][cpuCol] = CPU_MARKER;
  console.clear();

  displayBoard(board);
  prompt(`Computer chose row ${cpuRow + 1}, column ${cpuCol + 1}`);

  prompt('Press enter to continue');
  readline.prompt();
}