/*
- In bubble sort the first two elements of an array are compared
- If the first value is greater than the second, the two elements swap
- We do this until we pass through the array and no swaps are made
- then we return the completed array

Algorithm:
  - set variable swapped = false
  - while (true)
    - iterate through array from the second element:
      - check if arr[i - 1] > arr[i]
      - if so:
        - set variable tmp = arr[i]
        - set arr[i] = arr[i - 1]
        - set arr[i - 1] = tmp
        - set swapped = true
    - if !swapped break
*/

function bubbleSort(arr) {
  while (true) {
    let swapped = false;
    let finalLength = arr.length;
    for (let i = 1; i < finalLength; i++) {
      if (arr[i - 1] > arr[i]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    } else {
      finalLength -= 1;
    }
  }
  return arr;
}

console.log(bubbleSort([6, 2, 7, 1, 4]));