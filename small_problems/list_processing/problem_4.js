// let leadingSubstrings = str => {
//   let substrs = [];
//   for (let i = 1; i <= str.length; i++) {
//     substrs.push(str.slice(0, i));
//   }
//   return substrs;
// };

let leadingSubstrings = str => {
  return str.split('').reduce((arr, _, index) => {
    arr.push(str.slice(0, index + 1));
    return arr;
  }, []);
};

let str = 'xyzzy';
console.log(leadingSubstrings(str));
console.log(str);