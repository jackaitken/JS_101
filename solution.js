let sumEvenNumberRow = rowNumber => {
  const rows = [];
  let startInteger = 2;

  for (let currentRowNum = 1; currentRowNum <= rowNumber; currentRowNum += 1) {
    let row = createRow(startInteger, currentRowNum);
    rows.push(row);
    startInteger = row[row.length - 1] + 2;
  }

  return rows.pop().reduce((a, b) => a + b);
};

// 1. Create an empty array called ‘rows’, which will contain all of the rows
// 2. Next we’ll create the first row and add it to the rows array
// 3. We should repeat this until we’ve filled all the necessary rows
//    defined by the input value
//     1. A row is completed when it’s final length is equal to its row number.
// 4. Then we need to sum the final array in the rows array
// 5. return the sum

/*
The startInteger argument require a little bit more explanation. The startIntger
of any row greater than 1, is equal to the last element of the previous row + 2.
So:

[2],
[4, 6],
[8, 10, 12],
...

The starting number of the 2nd row (4) is equal to 2 + 2. The same goes for 8,
which is equal to 6 + 2.

If we want to extract this to a mini algorithm we could do this:
1. Get the last row from the rows array
2. Get the last integer of that row
3. Add 2 to that number to get the starting number of our next row
*/

let createRow = (startInteger, rowLength) => {
  const row = [];
  let currentInteger = startInteger;

  while (row.length < rowLength) {
    row.push(currentInteger);
    currentInteger += 2;
  }
  return row;
};

// Here again was our algorithm for the createRow function
// 1. Create an empty row to contain the integers
// 2. Add a starting integer
// 3. Then increment the starting integer by 2 to maintain
// consecutive even integers.
// 4. then we’ll repeat step 2 and 3 until the array has
// reached the correct length
// 5. Then we need to return the array.

/*
Steps 2 - 4 have a bit of intrecacy. We need to add the start integer
to a loop and then increment that integer by two until the length
of our newly created array is the same length as the row length.
*/


// test cases for sumEvenNumberRow
console.log(sumEvenNumberRow(1) === 2); // 2
console.log(sumEvenNumberRow(2) === 10);
console.log(sumEvenNumberRow(5) === 130);
console.log(sumEvenNumberRow(20));

// test cases for createRow
// console.log(createRow(2, 1)); // [2]
// console.log(createRow(4, 2)); // [4, 6]
// console.log(createRow(22, 5)); // [22, 24, 26, 28, 30]
