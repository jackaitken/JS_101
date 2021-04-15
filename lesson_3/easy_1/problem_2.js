// How can you determine whether a given string
// ends with an exclamation mark (!)?

/*
Since every character in a string has an index, we could just
check whether the last index === '!'.
*/

let endsWith1 = str => str[str.length - 1] === '!';

let str1 = "Come over here!";
let str2 = "What's up, Doc?";

endsWith1(str1); // true
endsWith1(str2); // false


/*
More succinctly however, JavaScript has a string method called endsWith()
that can do this pretty easily for us.
*/

let endsWith2 = str => str.endsWith('!');


endsWith2(str1); // true
endsWith2(str2); // false