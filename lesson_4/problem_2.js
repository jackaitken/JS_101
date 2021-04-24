// What is the return value of map in the following code? Why?

[1, 2, 3].map(num => {
  num * num;
});

/*
This is missing an explicit return, thus map will default to its
implicit return, which is undefined. It will populate a new array
with the value undefined, so the implicitly returned array will be
[undefined, undefined, undefined]
*/