//linear search approach
// time complexity O(n)
// space complexity O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let min = nums[0];

    for(let i=0; i<nums.length; i++){
        if(nums[i]<min){
            min = nums[i]
        }
    }

    return min;
}

//binary search approach
// time complexity O(log n)
// space complexity O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let min = Number.MAX_VALUE;
    let low=0, high = nums.length-1;

    while(low<=high){
        let mid=Math.floor((low+high)/2);

        if(nums[low]<=nums[high]){
            min = Math.min(min, nums[low])
            break;
        }

        if(nums[low]<=nums[mid]){
            min = Math.min(min, nums[low]);
            low=mid+1;
        } else {
            min = Math.min(min, nums[mid]);
            high = mid-1;
        }
    }

    return min;
};

//driver code
let nums = [3,4,5,1,2];
console.log(findMin(nums)); //1