/* eslint-disable max-lines-per-function */
/*
Given 3 numbers representing the lengths of 3 sides of a triangle
return either 'equilateral', 'isosceles', 'scalene', 'invalid'

Rules:
  - to be a valid triangle:
    - the sum of the two shorter sides must be greater than the length
      of the longest side
    - every side must have a length > 0
  - An equilateral triangle contains 3 equal sides
  - An isosceles triangle contains two equal sides and another side of different
    length
  - A scalene has three sides of different length

Algorithm:
  Thoughts:
    My mind first goes to just checkinging at each stage if we have a value
    triangle, then what kind of triangle we have.
    We should error check first and get out if we can.

  - add arguments to an array
  - sort the array in ascending order
  - if element 0 < 1 return invalid;
  - if element 0 + 1 > element 2 return invalid

*/

function triangle(side1, side2, side3) {
  let triangleArr = [side1, side2, side3];
  triangleArr.sort((a, b) => a - b);

  if (isInvalid(triangleArr)) {
    return 'invalid';
  } else {
    return getTriangleType(triangleArr);
  }
}

function isInvalid(array) {
  return array[0] <= 0 ||
  (array[0] + array[1] < array[2]);
}

function getTriangleType(array) {
  if (
    (array[0] === array[1]) &&
    (array[0] === array[2])
  ) {
    return 'equilateral';
  }

  if (
    (array[0] === array[1]) ||
    (array[0] === array[2]) ||
    (array[1] === array[2])
  ) {
    return 'isosceles';
  }
  return 'scalene';
}

console.log(triangle(3, 3, 3));
console.log(triangle(3, 3, 1.5));
console.log(triangle(3, 4, 5));
console.log(triangle(0, 3, 3));
console.log(triangle(3, 1, 1));