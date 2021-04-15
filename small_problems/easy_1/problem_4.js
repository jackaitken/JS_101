/*
PEDAC

UNDERSTAND THE (P)ROBLEM
  what are the inputs and outputs
  make the requirements explicit
  identify the rules
  mental model

(E)XAMPLES / TEST CASES
(D)ATA STRUCTURE
(A)LGORITHM

------------------------------

UNDERSTAND THE (P)ROBLEM
  WHAT ARE THE INPUTS AND OUTPUTS
    Input:
      1. the length of a room in meters from the user
      2. the width of a room in meters from the user
    Output:
      1. output the square meters of the room
      2. output the square feet of the room

  MAKE THE REQUIREMENTS EXPLICIT
    Square meters and feet will mean multiplying both the length
    and width of the room together.


  IDENTIFY THE RULES
    - we don't need to worry about input validation right now
    - we need to convert our square meters to square feet before displaying
      our output
    - we should read the users input twice.
    - we should display both on the same line.
    - when we display the square feet we need to fix our decimals to two places.

  MENTAL MODEL
    - given a length input and width input for the users room size
      we should display the area of the room in both square feet and
      square meters.

(E)XAMPLES
  Input:
    15, 10
  Output:
    The area of the room is 150 square meters (1,614.58).

(D)ATA STRUCTURE
  This is another problem where we really don't need a data structure.
  We'll just read the user input, set two variables called length and width
  and do our calculations on those numbers

(A)LGORITHM
  - Get length of room in meters from the user
  - Set length
  - Get width of room in meters from user
  - Set width
  - Print ('The area of the room is [meters] square meters ([square feet]
            square feet)')
*/

let area = () => {
  const SQUARE_FOOT_CALCULATION = 10.7639;

  let readline = require('readline-sync');

  let unit = readline.question('Calculate in meters or feet?');

  let length = readline.question('Enter the length of the room in meters: ');
  let width = readline.question('Enter the width of the room in meters: ');

  let calculateArea = Number(length) * Number(width);
  let areaInFeet = areaInMeters * SQUARE_FOOT_CALCULATION;
  areaInFeet = areaInFeet.toFixed(2);

  console.log(`The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet)`)
}

area();