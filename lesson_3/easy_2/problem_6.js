let unnest = arr => arr.flat();

let names = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

console.log(unnest(names));

// We can also use concat and the spread syntax to do this:

let unnestedNames = [];

unnestedNames.concat(...names);


/*
This essentially spreads the array into separate arguments to fit the method.
*/