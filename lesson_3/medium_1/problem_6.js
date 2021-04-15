// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

/*
NaN is the only thing in JavaScript that does not equal itself. nanArray[0]
will give us the value NaN, but NaN is not equal to itself so this will log
false.

JavaScript does not let us use == or === on NaN.

A good way to reliably test if a value is NaN is to first coerce that value
to a number, then use the Number.isNaN method to check.
*/

let x = 'hello';

Number.isNaN(Number(x));