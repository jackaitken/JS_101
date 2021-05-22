function isItemAvailable(id, transactions) {
  let quantity = transactionsFor(id, transactions).reduce((acc, elem) => {
    if (elem.movement === 'in') {
      return acc + elem.quantity;
    } else {
      return acc - elem.quantity;
    }
  }, 0);
  return quantity > 0;
}

function transactionsFor(id, transactions) {
  return transactions.filter(transaction => {
    return transaction.id === id;
  });
}

let transactions = [
  { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 },
];

console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(103, transactions));
console.log(isItemAvailable(105, transactions));