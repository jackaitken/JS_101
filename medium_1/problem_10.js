// Given these two functions

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

// What will the following output?

bar(foo());

/*
I believe this would return 'no'.

bar is called on the return value of foo(). No arguments are passed
to foo therefore the default parameter is no. This doesn't make much of
a difference as foo always returns 'yes'.

'yes' is passed to bar and the default parameter 'no' is ignored. In the
ternary statement, param is 'yes' so 'no' is false, therefore it will return
'no'.
*/