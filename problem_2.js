// What does the last line output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

/*
I think this will output { first: [1, 2]}. Within the object first
is a reference to another array. Because we set numArray = to that array
we're mutating that array directly. Object should still refer to that array.
*/