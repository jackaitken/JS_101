// What is the callback's return value in the following
// code? Also, what is the return value of every in this code?

[1, 2, 3].every(num => {
  return num = num * 2;
});

/*
This is a strange implementation of every but I'm going to work
through how every works so I can come to a solution. every checks
the return value of the callback in every iteration. If every the callback
returns true on every iteration, then the return value of every is true.

The assignment of num = num * 2 will result in order: 2, 3, 6, which
aren't a falsy values, so I believe the return value of each iteration
will be true, and the return value of the entire method call will be true.
*/