// Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

/*
This will not raise an error. JavaScript allows for syntax like this. Numbers
will equal the following array [1, 2, 3, <3 empty items> , 5].

the expression numbers[4] will return undefined as currently that index has
not been given a value. Technically these indexes don't have a value, so there
value isn't even undefined
*/

/*
Having an empty slot like we do above is much different than the value
'undefined'. Despite the return value of numbers[4] returning undefined
numbers[4] has NO value. it's an empty slot. If we use map() on our numbers
array the empty slots will remain. If we have numbers[4] the value of undefined
then it will not be treated as an empty item. Any empty items will remain
in the new array. See below:
*/

let newNumbers = [1, 2, 3];
newNumbers[8] = 8;

newNumbers[6] = undefined;

newNumbers // returns [1, 2, 3, <3 empty items>, undefined, <1 empty item>, 8]

newNumbers.map(() => 10);
// [10, 10, 10, <3 empty items>, 10, <1 empty item>, 10]

