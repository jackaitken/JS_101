const reverse = list => {
  let rightPointer = list.length - 1;
  let leftPointer = 0;

  while (leftPointer < rightPointer) {
    debugger;
    let tmp = list[leftPointer];
    list[leftPointer] = list[rightPointer];
    list[rightPointer] = tmp;
    rightPointer -= 1;
    leftPointer += 1;
  }
  return list;
};

let list = ["abc"];
let result = reverse(list);
console.log(list === result);
