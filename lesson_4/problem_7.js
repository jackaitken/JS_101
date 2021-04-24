// What is the return value of map in the following code? Why?

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

/*
the returned array will contain the value 'bear'. map in this case is
checking the length of the element on each iteration of the callback.
If that's true then the current element is returned.

Okay I was wrong. I had a suspicion that my above assumption may be incorrect
map is a transformation method. I also knew that map always returns n elements
given an array of size n. so the return value is [undefined, 'bear']. I
should have listened to my gut.

What happened is that map defaults to an implicit return since it wasn't
able to implicitly return something. The implicit return value is undefined.

*/