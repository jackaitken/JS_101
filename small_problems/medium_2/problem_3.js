
/*
 - right triangle has one angle that is exactly 90 degrees
 - acute triangles are all less than 90 degrees
 - obtuse triangels contain one angle greater than 90 degrees

 Rules:
  - a valid triangle has a sum of its angles is exactly 180
  - every angle must be greater than 0

Algorithm:
  - add each angle to an array
  - sort the array
  - get the sum of the array
  - if the sum of the array !== 180 or the element at index 0 <= 0:
    return invalid
  - if array includes 90:
    return right
  - if element at index 3 is greater than 90:
    return obtuse
  - else:
    return acute.
*/

function triangle(s1, s2, s3) {
  let triangleArr = [s1, s2, s3];
  triangleArr.sort((a, b) => a - b);

  if (isInvalid(triangleArr)) {
    return 'invalid';
  } else {
    return identifyTriangle(triangleArr);
  }
}

function isInvalid(array) {
  let sum = array.reduce((acc, elem) => acc + elem);
  return (sum !== 180 || array[0] <= 0);
}

function identifyTriangle(array) {
  if (array.includes(90)) {
    return 'right';
  } else if (array[2] > 90) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}

console.log(triangle(60, 70, 50) === 'acute');
console.log(triangle(30, 90, 60) === 'right');
console.log(triangle(120, 50, 10) === 'obtuse');
console.log(triangle(0, 90, 90) === 'invalid');
console.log(triangle(50, 50, 50) === 'invalid');