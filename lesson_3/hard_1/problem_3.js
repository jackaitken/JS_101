
// // A
function messWithVars1(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one1 = ["one"];
let two1 = ["two"];
let three1 = ["three"];

messWithVars1(one1, two1, three1);

console.log(`one is: ${one1}`);
console.log(`two is: ${two1}`);
console.log(`three is: ${three1}`);

// /*
// This will log: 'one is ['two']', 'two is ['three'], 'three is '[two]'.

// Okay, got that one wrong.

// My assumption was that one two and three were being passed by reference
// and therefore those operations would affect those variables.
// */

// // B

function messWithVars2(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one2 = ["one"];
let two2 = ["two"];
let three2 = ["three"];

messWithVars2(one2, two2, three2);

console.log(`one is: ${one2}`);
console.log(`two is: ${two2}`);
console.log(`three is: ${three2}`);

/*
I'm going to assume that this will be the same result for the same reason as
above.

It will log one is: one is: one, two is: two, three is: three.
*/

// C

function messWithVars3(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one3 = ["one"];
let two3 = ["two"];
let three3 = ["three"];

messWithVars3(one3, two3, three3);

console.log(`one is: ${one3}`);
console.log(`two is: ${two3}`);
console.log(`three is: ${three3}`);

/*
the splice() method mutates arrays in place. It takes three arguments:
where to start, how many items to delete, and what to insert.

So in the messWithVars function, we are trying to delete the element at index
0, and insert 'two'. Splice does it's operation in place, but this shoudn't make
a difference. I believe it will still output:

one is: one, two is: two, three is: three.

Well dangit.

The output was one is: two, two is: three, three is: one
*/


