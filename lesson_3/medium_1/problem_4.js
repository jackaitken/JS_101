// Is there a difference between these implementations, other
// than the method she used to add an element to the buffer?


function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

/*
The difference between the two implementations is the use of concat()
and push(). concat() does not mutate the caller but instead creates a
new array consiting of the elements from the caller plus the elements
within the argument. It does not modify the original array.

push() on the other hand does modify in place and destroys the original
array.

Calling the first function will mutate the original array. However with
the second function we return the array we've assigned to our concat() method.
We'll get back a new array that did not mutate the caller.
*/