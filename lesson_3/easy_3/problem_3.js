// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

/*
Primitives are immutable. Therefore manipulating str2 will have no effect
on str1. When we assigned str2 = to str1, we only assigned it to a copy of
str1.
*/