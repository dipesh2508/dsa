// binary search approach
// Time complexity: O(log n)
// Space complexity: O(1)
/**
 * @param {number[]} arr
 * @return {number}
 */
function rotation(arr) {
  let min = Number.MAX_VALUE;
  let index = -1;
  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[low] <= arr[mid]) {
      if (arr[low] < min) {
        index = low;
        min = arr[low];
      }

      low = mid + 1;
    } else {
      if (arr[mid] < min) {
        index = mid;
        min = arr[mid];
      }
      high = mid - 1;
    }
  }

  return index;
}
