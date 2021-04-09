const readline = require('readline-sync');
const MSG = require('./rps_messages.json');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

const winScenariosObj = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  spock: ['scissors', 'rock'],
  lizard: ['spock', 'paper']
};

let prompt = message => console.log(`=> ${message}`);

let displayWinner = (userChoice, cpuChoice) => {
  if (userChoice === cpuChoice) {
    prompt("It's a tie");
  } else if (winScenariosObj[userChoice].includes(cpuChoice)) {
    prompt("You win!");
  } else {
    prompt('You lose');
  }
};

while (true) {
  prompt(MSG.initialPrompt);
  let userChoice = readline.question();

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt(MSG.initialPrompt);
    userChoice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let cpuChoice = VALID_CHOICES[randomIndex];

  prompt(`${MSG.cpuChose} ${cpuChoice}`);

  displayWinner(userChoice, cpuChoice);

  prompt("Want to play again? 'y' or 'n'");
  let keepPlaying = readline.question().toLowerCase();

  while (keepPlaying !== 'y' && keepPlaying !== 'n') {
    prompt("Sorry, please enter 'y' or 'n'");
    keepPlaying = readline.question().toLowerCase();
  }

  if (keepPlaying === 'n') {
    prompt('Okay, see ya!');
    break;
  }
}