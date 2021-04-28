// let runningTotal = arr => {
//   return arr.reduce((acc, elem) => {
//     if (acc.length !== 0) {
//       acc.push(elem + acc[acc.length - 1]);
//     } else {
//       acc.push(elem);
//     }
//     return acc;
//   }, []);
// };

let runningTotal = arr => {
  let sum = 0;
  return arr.map(num => num + sum);
};
console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));