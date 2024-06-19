// using loop
// Time complexity: O(log n)
// Space complexity: O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

// using recursion
// Time complexity: O(log n)
// Space complexity: O(log n) - recursion stack

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return binary(nums, 0, nums.length - 1, target);
};

function binary(nums, left, right, target) {
  if (left > right) {
    return -1;
  }

  let mid = Math.floor((left + right) / 2);
  if (nums[mid] == target) {
    return mid;
  } else if (nums[mid] > target) {
    return binary(nums, left, mid - 1, target);
  } else {
    return binary(nums, mid + 1, right, target);
  }
}


//driver code
console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1