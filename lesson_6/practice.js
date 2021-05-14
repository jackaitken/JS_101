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

function shuffleDeck(array) { // FY shuffle - Copied from Launch School
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
  return array;
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

let deckArray = getCardsArray();

