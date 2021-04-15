// Add entries for Marilyn and Spot to the object:

/*
We can use the Object.assign() method to combine two separate objects.
If we provided two arguments to Object.assign() the first will be
overwritten with the new data, while the second will be left alone. However
we can pass the empty object is as the first array, so neither array
is mutated.
*/

let addProps = (obj1, obj2) => Object.assign({}, obj1, obj2);


let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

console.log(addProps(ages, additionalAges));