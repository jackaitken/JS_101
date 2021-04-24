// The following code differs slightly from the above code.
// What is the return value of map in this case? Why?

[1, 2, 3].map(num => num * num);

/*
Now that we've used an arrow function with an implicit return
this will give us a return value that we were likely expecting
in problem 2, which is [1, 4, 9]. Map takes the argument num
on each callback iteration and substitutes the current element.
Thus is will multiple the current element by itself and add that
to a new array.
*/