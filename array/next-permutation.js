// optimal solution
// time complexity O(n)
// space complexity O(1)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let breakPoint = -1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            breakPoint = i;
            break;
        }
    }

    if (breakPoint == -1) {
        return nums.reverse()
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > nums[breakPoint]) {
            let temp = nums[i];
            nums[i] = nums[breakPoint];
            nums[breakPoint] = temp;
            break;
        }
    }
    return reverseAfter(nums, breakPoint+1)
};


const reverseAfter = (arr, startIndex) => {
    let endIndex = arr.length - 1;
    while (startIndex < endIndex) {
        let temp = arr[startIndex];
        arr[startIndex] = arr[endIndex];
        arr[endIndex] = temp;
        
        startIndex++;
        endIndex--;
    }
    
    return arr;
}