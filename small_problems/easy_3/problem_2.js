/*
PEDAC

Understand the problem:
  We need to write a function such that the output will display the
  input string inside of a box.

  Input:
    string
  Output:
    string inside of box

  Explicit rules:
    - we need to take a short line of text and write that to the console
    inside of a box
    - we can expect that the input is short

  Implicit rules:
    - Based on the test cases it looks like an empty string input will
      produce a box that it two -'s wide and 3 |'s tall.
    - The goal is to then increase the size of that based on the number of
      characters in the string.

  Examples/Test Cases
    Input:
      ''
    Output:
      +--+
      |  |
      |  |
      |  |
      +--+

    Input:
      'hello' (length = 5)

    Output:
      +-------+ (hash length = 7)
      |       |
      |       |
      |       |
      +-------+

    ALGORITHM:
      - We could set variables called hyphen and pipe, which are equal to
        the total length of the input string + 2
      - then for the message we know that the edges of the string are always
        one space away from from the edge so our message can just be a string
        interpolation with a space on either side and a pipe.
      - We could then just log all these things in order.
*/

let logInBox = str => {
  let hyphen = `+${'-'.repeat(str.length + 2)}+`;
  let pipe = `|${' '.repeat(str.length + 2)}|`;

  console.log(hyphen);
  console.log(pipe);
  console.log(`| ${str} |`);
  console.log(pipe);
  console.log(hyphen);
};

logInBox('Hi my name is Jack');