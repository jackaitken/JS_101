/*
PEDAC

Understand the problem:
  we need to write a function that takes the year as input and
  returns the century. For example 2000 should return '20th'

  if the final 2 numbers are greater than 3 and less the 21:
    suffix should be th
  else:
    we should look at the last number:
      if it ends in 1: st
      if it ends in 2: nd
      if it ends in 3: rd
      any other number: th
*/

let century = year => {
  if (year <= 100) {
    return '1st';
  }
  let century = Math.ceil(year / 100);
  let suffix = findSuffix(century);

  return `${century}${suffix}`;
};

let findSuffix = year => {
  let stringCentury = String(year);
  const lastTwo = Number(stringCentury.slice(stringCentury.length - 2));
  const lastOne = Number(stringCentury.slice(stringCentury.length - 1));
  let suffix;

  if (lastTwo > 10 && lastTwo < 14) {
    suffix = 'th';
  } else if (lastOne === 1) {
    suffix = 'st';
  } else if (lastOne === 2) {
    suffix = 'nd';
  } else if (lastOne === 3) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }
  return suffix;
};

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"