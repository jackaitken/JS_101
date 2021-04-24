// How does Array.prototype.fill work? Is it destructive?
// How can we find out?

let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);

/*
Array.prototype.fill takes 1 argument, value and two additional optional
arguments, which determine the start and stop indices. What is written
above read: in arr, fill the value 1 from index 1 to 5. It does so in place
so this is a destructive array. This will output [1, 1, 1, 1, 1]

*/
