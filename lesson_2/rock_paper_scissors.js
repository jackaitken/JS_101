const readline = require('readline-sync');
const MSG = require('./rps_messages.json');
const VALID_CHOICES = ['r', 'p', 's', 'sp', 'l'];
let userWinCount = 0;
let cpuWinCount = 0;

const WIN_SCENARIOS_OBJ = {
  r: ['s', 'l'],
  p: ['r', 'sp'],
  s: ['p', 'l'],
  sp: ['s', 'r'],
  l: ['sp', 'p']
};

let declareGrandWinner = () => userWinCount === 5 || cpuWinCount === 5;

let prompt = message => console.log(`=> ${message}`);

let validMove = move => VALID_CHOICES.includes(move);

let getUserChoice = () => {
  let move = readline.question();

  while (!validMove(move)) {
    prompt('Please choose a valid move');
    prompt(MSG.initialPrompt);
    move = readline.question();
  }
  return move;
};

let returnGameWinner = (userChoice, cpuChoice) => {
  if (userChoice === cpuChoice) {
    return 0;
  } else if (WIN_SCENARIOS_OBJ[userChoice].includes(cpuChoice)) {
    return 1;
  } else {
    return -1;
  }
};

let updateScore = winner => {
  switch (winner) {
    case 1: userWinCount += 1;
      break;
    case -1 : cpuWinCount += 1;
      break;
  }
};

while (true) {
  console.clear();

  prompt(`You: ${userWinCount} Computer: ${cpuWinCount}`);

  prompt(MSG.initialPrompt);

  let userChoice = getUserChoice();

  prompt(`You chose: ${MSG[userChoice]}`);

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let cpuChoice = VALID_CHOICES[randomIndex];

  let gameWinner = returnGameWinner(userChoice, cpuChoice);
  updateScore(gameWinner);

  if (declareGrandWinner()) {
    console.clear();
    if (userWinCount > cpuWinCount) {
      prompt("You're the grand winner!");
    } else {
      prompt('The computer is the grand winner.');
    }
    prompt(`Final Score: ${userWinCount} - ${cpuWinCount}`);
    break;
  }

  prompt(`The computer chose: ${MSG[cpuChoice]}`);

  if (gameWinner === 1) {
    prompt('You won that round!');
  } else if (gameWinner === -1) {
    prompt('The computer won that round.');
  } else {
    prompt('That round was a tie.');
  }

  prompt('Press enter to continue');
  readline.question();
}
