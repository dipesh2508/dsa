// Linear search approach
// Time complexity: O(n)
// Space complexity: O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let f=-1, l=-1;

    for(let i=0; i<nums.length; i++){
        if(nums[i]===target){
        if(f!=-1){
           l = i; 
        } else{
            f=i;
            l=i;
        }
        }
    }
    return [f, l]
};

//binary search approach
// Time complexity: O(log n)
// Space complexity: O(1)
function lowerBound(arr, n, x) {
    let low = 0, high = n - 1;
    let ans = n;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] >= x) {
            ans = mid;
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return ans;
}

function upperBound(arr, n, x) {
    let low = 0, high = n - 1;
    let ans = n;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] > x) {
            ans = mid;
            high = mid - 1;
            console.log(ans)
        }
        else {
            low = mid + 1;
        }
    }
    return ans;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let lb = lowerBound(nums, nums.length, target);
    let ub = upperBound(nums, nums.length, target);
    if(lb === nums.length || nums[lb]!==target){
        return [-1, -1];
    }

    return [lb, ub-1];
};

//driver code

let arr = [5,7,7,8,8,10];
let n = arr.length;
let x = 8;
let result = searchRange(arr, x); 
console.log(result); // [3, 4]