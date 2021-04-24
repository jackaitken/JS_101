// What is the return value of the following statement? Why?

['ant', 'bear', 'caterpillar'].pop().length;

/*
Although we need a variable assignment to make this legal,
(it would work in the REPL) this would ouput 11. The pop
method returns the last element in the array. So we're asking for
the length of that popped element, caterpillar, which is 11 chars
long.
*/