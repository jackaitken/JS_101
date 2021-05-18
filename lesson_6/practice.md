1. What will this code return and why?

```js
[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});
```

On line 1, the method `Array.prototype.map` is called on the array literal `[[1, 2], [3, 4]]`
`map` takes as argument a callback function and the callback function takes the parameter
`arr` as an argument. Through each iteration of the callback, a subarray of the array literal
will be passed into the callback as `arr`.

On line 2, for each iteration of the callback another `map` method is called on the subarrays
In the callback function of this inner `map` method, a parameter `num` is defined and each number
of the subarray will be passed in on each iteration of the callback.

Finally each number will be multiplied by 2 and added to a new array that will be returned by the inner
`map` method and returned to the outer `map` method.

This code will return the array `[[2, 4], [6, 8]]`. `map` is a transformation method that will 
always return an array of the same length as the array is was called on.

2. In the following code, what are the final length values for array1, 
array2, array3, array4, and array5? Why?

```js
let array1 = [1, 2, undefined, 4]; // 4

let array2 = [1]; // 5
array2.length = 5;

let array3 = []; // 0
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5]; // 3
array4.length = 3;

let array5 = []; // 100
array5[100] = 3;
```

On line 1, a variable `array1` is declared and initialized to an array literal `[1, 2, undefineded, 4]`. All
four of the elements within the array referenced by `array1` are valid elements, so the final length for
this array is `4`

On line 3, a variable `array2` is declared and initialized to an array literal `[1]`. 
On line 4, the `length` property of the array referenced by `array2` is assigned a new valus `5`. Changing
the length this was is valid and will add 4 `<empty item>`'s to the array in order to mutate the length of the array to `5`. 

On line 6, a variable `array3` is declared and initialized to an empty array `[]`. 
On line 7, a new key `-1` is added to the array referenced by `array3` and assigned the value `3`. Negative numbers, however are not valid elements of an array that contribute to it's length, so the overall length of `array3` will be `0`.

On line 9, a variable `array4` is declared and initialized to the array literal `[1, 2, 3, 4, 5]`.
On line 10, the length of `array4` is assigned a new value `3`, which changes the overall length to 3 and removes the elements `4` and `5`.

On line 11, a variable `array5` is declared and initialized to an empty array `[]`. 
On line 12, the 100th index is accessed using bracket notation and assigned the value `3`. This adds 99 `<empty items>` in front of the 100th index, and the length of the overall array will be 101.

3. What will be the value of c and d on the last line of the code?

```js
let c = [1, 2]
let d = c
c = [3, 4]
c
= ?
> d
= ?
```
On line 1 the variable `c` is declared and initialized to an array literal `[1, 2]`.
On line 2, the variable `d` is declared and initialized to the array referenced by the variable `c`
On line 3, the variable `c` is reassigned to the array literal `[3, 4]`.

`c` will equal `[3, 4]`, but `d` will equal `[1, 2]`. The variable reasignment on line 3 does not change the value of `d`

4. What will be the output of this code and why?

```js
let array = [1, 2, 3];
let newArr = array.forEach(function (num) {
  return num;
});
console.log(newArr);
```

This will return `undefined`. 
On line 1 .
One line 2, the array method `Array.prototype.forEach` is called on the array referenced by `array`
However `forEach`'s return value is always `undefined` thus the value of `newArr` will be `undefined`

5. What will be return value of those two functions? Why?

```js
let animals = { a: 'ant', b: 'bear', c: 'cat' };
Object.values(animals).some(animalName => animalName.length > 4);
// => ?

Object.values(animals).some(animalName => animalName.length > 3);
// => ?
```

This will return `false` for the first method call and `true` for the second method call.

On line 1, a variable `animals` is declared and initialized to an object literal. 
On line 2 and line 5, using the object method `Object.values` an array of the values from the object referenced by `animals` is returned. On this returned array, the array method `Array.prototype.some` is called and in the callback function a parameter `animalName` is defined. a value will be passed into `animalName` on each iteration.

using the `some` method the length of the current `animalName` in the current iteration of the callback will be compared to the number 4 and then 3. There is no `animalName` greater than 4, so the first will return `false`. There is an animalName greater than 3 so the second will return `true`

6. Consider those two following code snippets:
```js
function addName(arr, name) {
  arr = arr.concat([name]);
}

let names = ["bob", "kim"];
addName(names, "jim");
console.log(names); // => ?


function addNames(arr, name) {
  arr = arr.push(name);
}

let names = ["bob", "kim"];
addNames(names, "jim");
console.log(names); // => ?
```

The first will output `['bob', 'kim']`
The second will output `['bob', 'kim', 'jim']`

`concat` does not mutate the calling array, but `push` does so calling `addNames` and using the `concat` method will not change the array passed in as `arr`

7. Describe what is happening in the code below:

```js
let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
```

There is a variable assignment on line 1 for the variable `counter` but then inside the definition of the while loop the variable `counter` is reassigned to the value 1. Because of 

https://www.notion.so/101-109-SPOT-session-0b8fdad923af4fc5bc4d5527d7dcea0d 



✅ This code snippet will output the string literal `'Andy'`. The implicit return value of the method `console.log` is `undefined` so this snippet will return `undefined`.

✅ On line 1, a global variable `ceo` is declared and initialized to the string literal `'David'`.

✅ On line 3, a global variable `manager` is declared and initialized to `undefined`.

☑️ From lines 5...9 an `if..else` statement checks the value assigned to the global variable `ceo`. In the `if` statement's condition the expression `ceo === 'David Wallace'` 

On line 5, an `if` statement checks the value assigned the global variable `ceo`. 

In the `if` statement's condition the expression `ceo === "David Wallace"`. 

If the global variable `ceo` evaluates to `true`....

If the value is `David Wallace`, the global variable `manager` will be reassigned to the string literal `Michael`. If not it will be reassigned the value `Andy`. 

Because the value assigned to `ceo` is not `David Wallace`,  `manager` is assigned the value `Andy`.

This demonstrates variable assignment and reassignment. 

Tyler's words:

The concept demonstrated is variable scoping rules and in particular how global variable reassignment is possible within nested block scope because global variables are accessible within nested block scope.