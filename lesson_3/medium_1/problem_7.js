// What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);


/*
This will output 34. Primitive values are immutable and when we pass answer
to messWithIt() answer is being passed by value, not by reference. Because of
this we cannot change the value of answer. newAnswer if we logged it would
output 50, but we're just outputting 42 - 8.
*/