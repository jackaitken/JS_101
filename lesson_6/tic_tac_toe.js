const readline = require('readline-sync');
const EMPTY_SQUARE = ' ';
const HUMAN_MARKER = 'X';
const CPU_MARKER = '0';
const WIN_SCORE = 5;
let playerWins = 0;
let cpuWins = 0;
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
  console.clear();
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

function displayScores(playerWins, cpuWins) {
  console.log(`Player: ${playerWins} Computer: ${cpuWins}`);
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

  let possibleCpuWin = checkForWinScenario(validMoves, CPU_MARKER);

  if (possibleCpuWin) {
    return possibleCpuWin;
  }

  let possibleOpponentWin = checkForWinScenario(validMoves, HUMAN_MARKER);

  if (possibleOpponentWin) {
    return possibleOpponentWin;
  }

  let randIndx = Math.floor(Math.random() * validMoves.length);
  return validMoves[randIndx];
}

function checkForWinScenario(arr, player) {
  let boardCopy = [...board];

  for (let pair of arr) {
    boardCopy[pair[0]][pair[1]] = player;
    let isWinningSquare = isWinner(boardCopy);

    if (isWinningSquare) {
      return pair;
    } else {
      boardCopy[pair[0]][pair[1]] = EMPTY_SQUARE;
    }
  }
  return false;
}

function isTie(board) {
  return board.every(row => {
    return row.every(cell => cell !== EMPTY_SQUARE);
  });
}

function isWinner(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  let winningScenarios = [
    [[0, 0], [0, 1], [0, 2]], [[1, 0], [1, 1], [1, 2]], // rows
    [[2, 0], [2, 1], [2, 2]], 
    [[0, 0], [1, 0], [2, 0]], [[0, 1], [1, 1], [2, 1]], // columns
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]], [[2, 0], [1, 1], [0, 2]], // diagonals
  ];

  for (let row of winningScenarios) {
    let [sq1, sq2, sq3] = row;
    if (
      board[sq1[0]][sq1[1]] === HUMAN_MARKER &&
      board[sq2[0]][sq2[1]] === HUMAN_MARKER &&
      board[sq3[0]][sq3[1]] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1[0]][sq1[1]] === CPU_MARKER &&
      board[sq2[0]][sq2[1]] === CPU_MARKER &&
      board[sq3[0]][sq3[1]] === CPU_MARKER
    ) {
      return 'Computer';
    }
  }
}

function playAgain() {
  prompt('Are you ready for the next round? (y or n)');
  let answer = readline.question('> ');

  while (!validContinueKey(answer)) {
    prompt('Sorry, please enter either y or n');
    answer = readline.question('> ');
  }
  return answer;
}

function validContinueKey(key) {
  if (key !== 'y' && key !== 'n') {
    return false;
  } else {
    return true;
  }
}

function updateScore(winner) {
  winner === 'Player' ? playerWins += 1 : cpuWins += 1;
}

function grandWinnerExists(playerScore, cpuScore) {
  if (playerScore >= WIN_SCORE) {
    return 'Player';
  } else if (cpuScore >= WIN_SCORE) {
    return 'Computer';
  }
  return false;
}

while (true) {
  while (true) {
    displayBoard(board);
    displayScores(playerWins, cpuWins);

    let row = getPlayerMove('row');
    let column = getPlayerMove('column');

    while (!isEmpty(row, column, board)) {
      displayBoard(board);
      prompt('Please choose an empty space');
      row = getPlayerMove('row');
      column = getPlayerMove('column');
    }

    board[row][column] = HUMAN_MARKER;

    if (isWinner(board) || isTie(board)) {
      break;
    }

    let [cpuRow, cpuCol] = getCpuMove(board);
    board[cpuRow][cpuCol] = CPU_MARKER;

    if (isWinner(board) || isTie(board)) {
      break;
    }

    displayBoard(board);
    prompt(`Computer chose row ${cpuRow + 1}, column ${cpuCol + 1}`);

    prompt('Press enter to continue');
    readline.prompt();
  }

  if (isWinner(board)) {
    displayBoard(board);
    let winner = detectWinner(board);
    prompt(`${winner} won!`);
    updateScore(winner);

    let grandWinner = grandWinnerExists(playerWins, cpuWins);

    if (grandWinner) {
      prompt(`${grandWinner} is the grand winner!`);
      break;
    }
  } else {
    prompt('Game ended in a tie');
  }

  if (playAgain() === 'n') {
    prompt('Okay! See ya later');
    break;
  } else {
    board = initializeBoard();
  }
}

