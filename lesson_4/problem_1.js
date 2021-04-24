// What is the return value of the filter method call below? Why?

[1, 2, 3].filter(num => 'hi');

/*
This method call to filter will return [1, 2, 3]. It's a strange
use of filter, but ALL that filter cares about is the truthiness
of the callbacks return value. The return value of the callback
is 'hi', which is not falsy. Thus on each iteration, a truthy value
will be returned, so [1, 2, 3] is the new array.
*/