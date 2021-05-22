let sumOfSums = arr => {
  let runningArr = [];
  let runningSum = 0;

  arr.forEach(num => {
    runningArr.push(num);
    runningSum += runningArr.reduce((acc, elem) => {
      return acc + elem;
    }, 0);
  });
  return runningSum;
};


console.log(sumOfSums([3, 5, 2]));

/*
given an array of integers we need to find the total sum of the individual
sums within the array.

So given an array: [3, 5, 2], the sums we need to find are:
  3, 3 + 5, and 3 + 5 + 2
  Then we need to add all of those

algorithm
  Iterate through the list of numbers
  while we haven't reached the end
    add the current number to an array
    find the sum of that array
    save the sum to a variable

  finally return the total sum
*/

