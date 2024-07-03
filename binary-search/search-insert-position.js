// linear search 
// Time complexity: O(n)
// Space complexity: O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        if(nums[i]>=target){
            return i
        }
    }
    return nums.length
};

// binary search
// Time complexity: O(log(n))
// Space complexity: O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low=0, high=nums.length-1

    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(target === nums[mid]){
            return mid;
        } else if(target<nums[mid]){
            high=mid-1;
        } else{
            low=mid+1;
        }
    }

    return low;
};

//driver code
console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1