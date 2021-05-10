const isBalanced = string => {
  let stack = [];
  const PAIRS = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let i of string) {
    if (Object.values(PAIRS).includes(i)) {
      let lastIndex = stack.pop();
      if (PAIRS[lastIndex] !== i) {
        return false;
      }
    } else if (i in PAIRS) {
      stack.push(i);
    }
  }
  return stack.length === 0;
};

console.log(isBalanced("What {{is}} this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);