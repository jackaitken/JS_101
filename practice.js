let arr = [];
function multisum (num) {
  for(let i = 1; i <= num; i++) {
    arr.push(i);
  }
  let newArr = arr.filter(elm => elm % 3 === 0 || elm % 5 === 0);
  let finalArr = newArr.reduce((acc,curr) => {
    return acc + curr;
  });
  console.log(finalArr);         
}

multisum(3);       // 3
multisum(5);       // 11
multisum(10);      // 44
multisum(1000);    // 234212