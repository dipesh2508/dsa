//binary search
// time complexity O(log n)
// space complexity O(1)

function floorSqrt(x) {
  let low = 1, high = x;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let ans = mid * mid;

    if (ans <= x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return high;
}

//driver code
console.log(floorSqrt(4));
console.log(floorSqrt(10));