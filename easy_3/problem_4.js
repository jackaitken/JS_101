// What will the following code output

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

/*
Without running the code, I believe:

If we assigned arr2 = arr1 then manipulating arr2 would effect arr1
because they are in reference to the same array. However, slice returns
a shallow copy, thus we've created a copy of arr1. Manipulating arr2 in
this case has no effect on arr1.

Shoot.

I was kind of close, but the shallow copy is where I went wrong. If we
made a change like this arr2[0] = 10, then it would have no impact on arr1
BUT because this is a shallow copy, JS only duplicates the outermost values
in an array like arr1. Therefore the only values that we actually copies
are the arr[2], arr[3], and arr[4]. We're still manipulating the same objects
in arr[0] and arr[1]. 

A deep copy on the other hand, would have given us copies of everything.

Here is what our arr1 looked like:

+---------+             +---------------------+
| pointer | ----------> | { first: "value1" } |
+---------+             +---------------------+
| pointer | -----+
+---------+      |
|    3    |      |      +----------------------+
+---------+      +----> | { second: "value2" } |
|    4    |             +----------------------+
+---------+
|    5    |
+---------+

We have indexes for each position, but in index 0 and 1, exist pointers to
another object. When we make a shallow copy we will still retain those 
original objects.

This is what our arr2 array looked like:

   arr1                                                       arr2
+---------+             +---------------------+              +---------+
| pointer | ----------> | { first: "value1" } | <----------- | pointer |
+---------+             +---------------------+              +---------+
| pointer | -----+                                    +----- | pointer |
+---------+      |                                    |      +---------+
|    3    |      |      +----------------------+      |      |    3    |
+---------+      +----> | { second: "value2" } | <----+      +---------+
|    4    |             +----------------------+             |    4    |
+---------+                                                  +---------+
|    5    |                                                  |    5    |
+---------+                                                  +---------+

while we have independent values at arr[2], arr[2], arr[4], arr[0] and arr[1]
are still pointing to those same objects.
*/
