// Binary Search Implementation
// Time Complexity: O(log n)
// Space Complexity: O(1)
function getFloorAndCeil(arr, n, x) {
  let low = 0,
    high = n - 1;
  let ans1 = -1,
    ans2 = -1;

  // Finding floor
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] <= x) {
      ans1 = arr[mid];
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  low = 0;
  high = n - 1;

  // Finding ceil
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= x) {
      ans2 = arr[mid];
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return { floor: ans1, ceil: ans2 };
}

// Driver Code
let arr = [1, 2, 8, 10, 10, 12, 19];
let n = arr.length;
let x = 5;
let result = getFloorAndCeil(arr, n, x);
console.log(result); // { floor: 2, ceil: 8 }
