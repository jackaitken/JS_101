/*

*/

function solution(fullText, searchText) {
  let regex = new RegExp(searchText, 'g');
  return fullText.match(regex).length;
}

console.log(solution('abcdeb','b') === 2);
console.log(solution('abc','b') === 1);
console.log(solution('abbc','bb') === 1);