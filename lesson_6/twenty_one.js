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

let deck = {
  Ace: {value: 11, remaining: 4},
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

function initialDeal(deck) {
  let playerFirstCard = deck.shift();
  let playerSecondCard = deck.shift();

  let cpuFirstCard = deck.shift();
  let cpuSecondCard = deck.shift();

  return [
    playerFirstCard, playerSecondCard,
    cpuFirstCard, cpuSecondCard
  ];
}

function displayInitialDeal(shuffledDeck) {
  let [pFirst, pSecond, cFirst, cSecond] = initialDeal(shuffledDeck);
  console.log(pFirst, pSecond);
  console.log(cFirst, 'unknown');
}

let shuffledDeck = initializeDeck();
displayInitialDeal(shuffledDeck);




// while (true) {
  // shuffleDeck()
  // dealCards
  // while (true){
    // hit or stay
    // if stay or busted() break
  //}
// }
