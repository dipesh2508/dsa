//linear search
// time complexity O(n)
// space complexity O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let ans = -1;
    for(let i=0; i<nums.length; i++){
        if(nums[i]===target){
            ans = i;
        }
    }

    return ans;
};

//binary search approach
// time complexity O(log n)
// space complexity O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0, high = nums.length-1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(nums[mid] === target){
            return mid;
        } else {
            if(nums[low]<=nums[mid]){
                if(nums[low]<=target && target<=nums[mid]){
                    high = mid-1;
                } else {
                    low = mid+1
                }
            } else {
                if(nums[mid]<=target && target <= nums[high]){
                    low = mid+1
                } else {
                    high = mid-1;
                }
            }
        }
    }

    return -1;
};

//driver code
let nums = [4,5,6,7,0,1,2];
let target = 0;
console.log(search(nums, target)); //4