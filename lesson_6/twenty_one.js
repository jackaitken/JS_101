/*
Game loop

1. We initalize the deck
2. Deal two cards to the player
3. Deal cards to the dealer
   a. The second card is hidden to the player
4. We ask the user if they want to hit or stay
5. We continue until they bust or choose to stay
   a. if they bust, the game is over and the dealer wins
6. If they stay, then we do the same for the dealer
   a. they continue hitting until their total is greater than
      or equal to 17
7. At the end the final card total's are comapred
*/

let readline = require('readline-sync');

let deck = {
  Ace: {remaining: 4},
  King: {value: 10, remaining: 4},
  Queen: {value: 10, remaining: 4},
  Jack: {value: 10, remaining: 4},
  10: {value: 10, remaining: 4},
  9: {value: 9, remaining: 4},
  8: {value: 8, remaining: 4},
  7: {value: 7, remaining: 4},
  6: {value: 6, remaining: 4},
  5: {value: 5, remaining: 4},
  4: {value: 4, remaining: 4},
  3: {value: 3, remaining: 4},
  2: {value: 2, remaining: 4},
};

let shuffledDeck = initializeDeck();

function prompt(message) {
  console.log(`=> ${message}`);
}

function initializeDeck() { // FY shuffle - Copied from Launch School
  let deckArray = getCardsArray();

  for (let index = deckArray.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [deckArray[index], deckArray[otherIndex]] =
    [deckArray[otherIndex], deckArray[index]]; // swap elements
  }
  return deckArray;
}

function getCardsArray() {
  let deckArray = [];

  Object.entries(deck).forEach(card => {
    while (card[1].remaining > 0) {
      deckArray.push(card[0]);
      card[1].remaining -= 1;
    }
  });
  return deckArray;
}

function initialDeal(shuffledDeck) {
  let firstCard = shuffledDeck.shift();
  let secondCard = shuffledDeck.shift();

  return [firstCard, secondCard];
}

function displayPlayerHand(playerHand) {
  console.log(`You have: ${playerHand[0]} and ${playerHand[1]}`);
}

function displayDealerHand(dealerHand) {
  console.log(`Dealer has: ${dealerHand[0]} and unknown`);
}

function dispayNewCard(newCard) {
  prompt(newCard);
}

function handValue(hand) {
  const ACE_VALUE = 11;
  let curValue = 0;

  for (let card of hand) {
    if (card === 'Ace') {
      curValue += ACE_VALUE;
    } else {
      curValue += getNonAceValue(card);
    }
  }
  return curValue;
}

function getNonAceValue(card) {
  return deck[card].value;
}

function getPlayerDecision(hand) {
  while (true) {
    prompt('Hit or Stay?');
    let answer = readline.question().toLowerCase();
    if (answer === 'stay' || busted(hand)) {
      break;
    } else {
      let newCard = dealNewCard(shuffledDeck);
      hand.push(newCard);
      if (busted(hand)) break;
    }
  }

  if (busted(hand)) {
    prompt('You busted');
  } else {
    prompt('You stayed');
    prompt('Dealer will now draw');
  }
}

function busted(hand) {
  const VARYING_ACE_VALUE = 10;
  let curHandValue = handValue(hand);

  if (curHandValue < 21) {
    return false;
  } else if (curHandValue > 21) {
    hand.forEach(card => {
      if (card === 'Ace') {
        curHandValue -= VARYING_ACE_VALUE;
      }
    });
  }

  if (curHandValue > 21) {
    return true;
  } else {
    return false;
  }
}

function dealNewCard(shuffledDeck) {
  let newCard = shuffledDeck.shift();
  dispayNewCard(newCard);
  return newCard;
}

function playDealerHand(dealerHand) {
  let curHandValue = handValue(dealerHand);

  while (!busted(dealerHand) && curHandValue < 17) {
    let newCard = dealNewCard(shuffledDeck);
    dealerHand.push(newCard);
    curHandValue = handValue(dealerHand);
  }

  return dealerHand;
}

function playAgain() {
  prompt('Do you want to play again? (y or n)');
  let answer = readline.question();

  if (answer === 'n') {
    return false;
  } else {
    return true;
  }
}

// Game Loop
while (true) {
  while (true) {
    console.clear();
    let playerHand = initialDeal(shuffledDeck);
    let dealerHand = initialDeal(shuffledDeck);

    displayPlayerHand(playerHand);
    displayDealerHand(dealerHand);

    if (handValue(playerHand) === 21) {
      prompt('Blackjack!');
    } else {
      getPlayerDecision(playerHand);
      if (busted(playerHand)) {
        break;
      }
    }

    if (handValue(dealerHand) === 21) {
      prompt('Dealer has Blackjack');
    } else {
      let curDealerHand = playDealerHand(dealerHand);
      if (busted(curDealerHand)) {
        prompt('Dealer busted. You win!');
        break;
      }
    }

    let finalPlayerValue = handValue(playerHand);
    let finalDealeralue = handValue(dealerHand);

    prompt(`You had ${finalPlayerValue} dealer had ${finalDealeralue}`);
    if (finalPlayerValue > finalDealeralue) {
      prompt('You won!');
    } else if (finalPlayerValue === finalDealeralue) {
      prompt("It's a tie");
    } else {
      prompt('Dealer won');
    }
    break;
  }
  let keepPlaying = playAgain();
  if (!keepPlaying) {
    prompt('Thanks for playing');
    break;
  }
  shuffledDeck = initializeDeck();
}