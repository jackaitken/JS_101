/*
Input:
  string with parentheses
Output:
  string with the parentheses removed and any
  text in between the parentheses also removed

Example:
''

"example(unwanted thing)example"
"a(b(c)h)"


Rules:
  - only alphabetic letters
  - don't need to worry about [] or {}
  - there can be multiple parentheses
  - they can be nested


Algorithm:
  - set var = resultString
  - set var = seenOpenParen to 0
  - iterate through the string
    - if we find an open paren
      - increment openParen by 1
    - if we find a close paren
      - decrement open parent by 1
    - else
      - check that open paren is 0
        - add the char
  - return the result string
*/

function removeParentheses(s) {
  let resultString = '';
  let openParenCounter = 0;

  s.split('').forEach(char => {
    if (char === '(') {
      openParenCounter += 1;
    } else if (char === ')') {
      openParenCounter -= 1;
    } else if (openParenCounter === 0) {
      resultString += char;
    }
  });
  return resultString;
}

console.log(removeParentheses("example(unwanted thing)example") === "exampleexample");
console.log(removeParentheses("example (unwanted thing) example") === "example  example");
console.log(removeParentheses("a (bc d)e") === "a e");
console.log(removeParentheses("a(b(c))") === "a");
console.log(removeParentheses("hello example (words(more words) here) something") === "hello example  something");
console.log(removeParentheses("(first group) (second group) (third group)") === "  ");