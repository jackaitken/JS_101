// Alan wrote the following function, which was intended to 
// return all of the factors of number:

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

// Alyssa noticed that this code would fail when the input is
// 0 or a negative number, and asked Alan to change the loop.
// How can he make this work without using a do/while loop
// we want to handle it gracefully instead of raising an exception 
// or going into an infinite loop.

let factors1 = number => {
  let factors = [];
  let divisor = number;

  for (let i = divisor; divisor > 0; divisor--) {
    if (number % divisor === 0) {
      factors.push(divisor);
    }
  }
  return factors;
};

console.log(factors1(212));

/*
We'll change the while loop to a for loop. The limitation with a do/while
loop in this instance is that we need to perform some operation at least
once, then it will continue to subtract 1 from the divisor, ensuring that
it will never meet the condition while (divisor !== 0).

The benefit of a for loop is that we first can abstract out a lot of the
additional operations we need to perform on divisor, but we can we also
ensure that divisor must be greater than 0 or else it will return an empty
array.

Factors are numbers you multiply together to get new numbers. Therefore
the factors of a given number are such that you can multiply them with another
number to get the given number.

The factors of 10 are [1, 2, 5, 10]. 1 * 10 = 10, 2 * 5 = 10, 5 * 2 = 10,
10 * 1 = 10. To determine factors we can simply check if our number can be
evenly divided by another number. We can use the remainder operator % to check
that number % divisor === 0. If that's the case then our number can be
divided by another number.

If we pushed divisor instead of the result of number / divisor, it would
give us an opposite order in the array. We would go from smallest to largest.
*/