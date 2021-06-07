function fridayThe13ths(year) {
  let thirteenths = [];

  for (let i = 0; i < 12; i++) {
    thirteenths.push(new Date(year, i, 13));
  }

  return thirteenths.filter(date => {
    return date.getDay() === 5;
  }).length;
}

console.log(fridayThe13ths(1986) === 1);
console.log(fridayThe13ths(2015) === 3);
console.log(fridayThe13ths(2017) === 2);

/*
We should write a function that can take a year,
and return how many friday the 13ths occurred.

Rules:
  - the year is greater than 1752
  - same calendar will be in use

We'll need to use the Date object

Algorithm:
  - set a variable thirteenths
  - set a variable start date
  - 
*/