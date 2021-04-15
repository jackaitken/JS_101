// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

/*
This will not return the same thing. While line 4 begins a return statement
that includes the object, line 10 returns and exits the function. Everything
within the function after line 10 is unreachable.

console.log(first()); outputs {prop1: 'hi there'}
console.log(second()); outputs undefined.

Further explanation shows that the JavaScript engine will insert semicolons
where you think you need them. Therefore after the return on line 10, JavaScript
will chuck a semicolon in there thinking that it's what you intended.
*/