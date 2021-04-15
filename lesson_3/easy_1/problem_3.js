// Determine whether the following object of people and their
// age contains an entry for 'Spot':

/*
I think a good way to check would be to use some method chaining.
We can return an array of the keys using Object.keys() and then check
whether that resulting array includes 'Spot'.
*/

let findSpot = obj => Object.keys(obj).includes('Spot');

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(findSpot(ages));

/*
Conversly you could also use the Object.prototype.hasOwnProperty() method.
This will determine if the caller has the passed property as it's own
or if that property was inherited.
*/

let hasSpotProperty = obj => obj.hasOwnProperty('Spot');

console.log(hasSpotProperty(ages));