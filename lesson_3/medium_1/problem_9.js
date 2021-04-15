// Suppose we define a function named rps as follows, which follows
// the classic rules of the rock-paper-scissors game, but with a
// slight twist: in the event of a tie, it just returns the choice
// made by both players.

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

// What does the following code output?

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
/*
The innermost call is to rps(rps('rock', 'paper'), rps('rock', scissors)).
So we're calling the rps on the result of two other games. The result of the
fist1 call is paper, and the result of the fist2 call is rock. The result
of rps('paper', 'rock') is paper.

Since we're then calling rps('paper', 'rock') we get paper.
*/