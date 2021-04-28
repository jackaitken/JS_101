// let sum = num => {
//   let strNum = String(num);
//   return strNum.split('').reduce((acc, elem) => {
//     return acc + Number(elem);
//   }, 0);
// };

// console.log((sum(23)));

// let transactionsFor = (inventoryItem, transactions) => {
//   let
// };

let inventoryCounter = transactionArr => {
  let absoluteVal = 0;

  transactionArr.forEach(transaction => {
    if (transaction.movement === 'in') {
      absoluteVal += transaction.quantity;
    } else {
      absoluteVal -= transaction.quantity;
    }
  });
  return absoluteVal;
};

// let inventoryCounter = items => {

//   return items.reduce((acc, items) => {
//     if (items.movement === 'in') {
//       return acc + items.quantity;
//     } else {
//       return acc - items.quantity;
//     }
//   }, 0);
// };

let arr = [
  { id: 101, movement: 'in', quantity: 5 },
  { id: 101, movement: 'in', quantity: 5 },
  { id: 101, movement: 'in', quantity: 5 }
];

console.log(inventoryCounter(arr));