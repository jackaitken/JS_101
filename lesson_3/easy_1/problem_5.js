// What will the following code output?

console.log(false == '0');
console.log(false === '0');

/*
This will output 'true' then 'false'.

On line 3, using the loose equivalency operator, JavaScript
will coerce the boolean false to it's number equivalent 0. Then
JavaScript will convert the other operand '0' to it's number
equivalent: 0 before it makes a comparison.

On line 4, we use the strict equivalency operator, which only determines
equivalency between two operands of the same type. false is a boolean and
is not equal to the string '0'.
*/