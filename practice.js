let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

Object.entries(munsters).forEach(munster => {
  let name = munster[0];
  let age = munster[1].age;
  let gender = munster[1].gender;

  console.log(`${name} is a ${age}-year-old ${gender}`);
});





/*
- We passed in both our northSouth coordinate and our eastWest coordinate.
- we should check the value of the map at those coordinates.
- Based on that value we can adjust northSouth or eastWest
*/




// let arr1 = [[1, 2, 3], [4, 5, 6]]

// arr1.map(elem => {
//   return elem.map(num => { // [2, 3, 4]
//     return num + 1;
//   })
// })


// /*
// On line 1, the global variable `arr1` is declared and initialized to an array literal `[[1, 2, 3], [4, 5, 6]]`.

// On line 3, the `map` method is called on the array referenced by the global variable `arr1`. A callback function is passed as an argument to the `map` method. As `map` iterates over the items of the caller array, each item is assigned to the callback function's parameter `elem`. 

// On line 4, the `map` method is called on the current value of the `elem` parameter, which references another array. A callback function is passed as an argument to the `map` method. As `map` iterates over the items of the caller array, each item is assigned to the callback function's parameter `num`. 

// On line 5, the value stored in the `num` parameter is transformed by incrementing the value by `1`. Therefore, the value produced by the expression `num + 1` is explicitly returned.

// The innermost map method will return the items [2, 3, 4], [5, 6, 7]

// The `map` method transforms an array by 


// The parameter `elem` references the current item in the caller array, which is a reference to an array. 
// *



// // let arr = [1, 2, 3, 4];

// // arr.map(num => {
// //   return num + 1;
// // });


// /*
// On line 1, the global variable `arr` is declared and initialized to the array literal 
// [1, 2, 3, 4]. 

// On line 3, the `map` method is called on the array referenced by global variable `arr`. A callback function is passed as an argument to the map method. As the `map` method iterates over the items of the caller array, each item is assigned to the callback function's parameter `num`. 

// On line 4, the value stored in the callback function's num parameter at the current iteration is transformed by incrementing the value by 1. Then this value is explicitly returned.

// Explain `map`
// Therefore, a new array [2, 3, 4, 5] is returned by the map method. 

// */
