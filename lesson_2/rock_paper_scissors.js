const readline = require('readline-sync');
const MSG = require('./rps_messages.json');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

let prompt = message => console.log(`=> ${message}`);

let displayWinner = (cpuChoice, userChoice) => {
  if ((userChoice === 'rock' && cpuChoice === 'scissors') ||
  (userChoice === 'paper' && cpuChoice === 'rock') ||
  (userChoice === 'scissors' && cpuChoice === 'paper')) {
    prompt('You win!');
  } else if ((userChoice === 'rock' && cpuChoice === 'paper') ||
                (userChoice === 'paper' && cpuChoice === 'scissors') ||
                (userChoice === 'scissors' && cpuChoice === 'rock')) {
    prompt('You lost');
  } else {
    prompt("It's a tie");
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

  displayWinner(cpuChoice, userChoice);

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