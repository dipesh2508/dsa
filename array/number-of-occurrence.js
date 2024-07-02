//binary search approach
// Time complexity: O(log n)
// Space complexity: O(1)
function count(arr, n, x) {
  function lowerBound(arr, n, x) {
    let low = 0,
      high = n - 1;
    let ans = n;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] >= x) {
        ans = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return ans;
  }

  function upperBound(arr, n, x) {
    let low = 0,
      high = n - 1;
    let ans = n;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] > x) {
        ans = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return ans;
  }
  //code here
  let lb = lowerBound(arr, n, x);
  let ub = upperBound(arr, n, x);

  return ub - lb;
}


//driver code
let arr = [1, 1, 2, 2, 2, 2, 3];
let x = 2;
let n = arr.length;
console.log(count(arr, n, x)); //4