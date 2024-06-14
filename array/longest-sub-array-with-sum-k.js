function lenOfLongSubarr(nums, n, k) {
  //code here

  let hashMap = new Map();

  let sum = 0;
  let largest = 0;

  for (let i = 0; i < n; i++) {
    sum += nums[i];

    if (sum === k) {
      largest = Math.max(largest, i + 1);
    }

    let rem = sum - k;

    if (hashMap.has(rem)) {
      let len = i - hashMap.get(rem);
      largest = Math.max(len, largest);
    }

    if (!hashMap.has(sum)) {
      hashMap.set(sum, i);
    }
  }

  return largest;
}

let nums = [10, 5, 2, 7, 1, 9];
let n = nums.length;
let k = 15;
console.log(lenOfLongSubarr(nums, n, k)); // 4
