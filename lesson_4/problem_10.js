// Pick out the minimum age from our current Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let sortedAges = Object.values(ages).sort((a, b) => a - b);
let youngest = sortedAges.shift();
console.log(youngest);