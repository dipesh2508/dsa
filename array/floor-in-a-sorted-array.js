// brute force
// Time complexity: O(n)
// Space complexity: O(1)
function findFloor(arr, n, x) {
    //your code here
  if (arr[0] > x) {
    return -1;
  }

  for (let i = 0; i < n; i++) {
    if (arr[i] == x) {
      return i;
    } else if (arr[i] > x) {
      return i - 1;
    }
  }

  return n - 1;
}

//driver code 
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 7, 5)); // 1
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 7, 20)); // 6