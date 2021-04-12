// What will this output?

console.log([1, 2, 3] + [4, 5]);

/*
Without running the code, I think that JavaScript will concatenate both
of these arrays into one array. [1, 2, 3, 4, 5].

After running the code I can see that I was half right. JS did concatenate
them but I didn't think far enough to what the output would be:

The output was 1,2,34,5. Now interestingly even changing the array to try
and fix the output like this:
*/

console.log([1, 2, 3, ] + [4, 5]);

/*
Will still give the same output. JavaScript first coerces these arrays
to strings, then it concatenates them.
*/
