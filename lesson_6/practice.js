
const HUMAN_MARKER = 'X';
const CPU_MARKER = '0';

let board = [
  ['X', 'O', 'O'],
  ['X', ' ', ' '],
  ['X', ' ', 'O']
];

function detectWinner(board) {
  let winningScenarios = [
    [[0, 0], [0, 1], [0, 2]], [[1, 0], [1, 1], [1, 2]], // rows
    [[2, 0], [2, 1], [2, 2]], 
    [[0, 0], [1, 0], [2, 0]], [[1, 0], [1, 1], [1, 2]], // columns
    [[2, 0], [2, 1], [2, 2]],
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

console.log(detectWinner(board));
