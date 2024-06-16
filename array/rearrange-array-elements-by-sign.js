// brute force
// time complexity O(n+n/2)
// space complexity O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let arr1 = [], arr2 = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            arr1.push(nums[i])
        } else {
            arr2.push(nums[i])
        }

    }
    let arr = []
    for (let i = 0; i < nums.length/2; i++) {
        arr.push(arr1[i])
        arr.push(arr2[i])
    }

    return arr;
};

// optimized solution
// time complexity O(n)
// space complexity O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let p = 0;
    let n = 1;
    let arr = new Array(nums.length)

    for(let i=0; i<nums.length; i++){
        if(nums[i]>=0){
            arr[p] = nums[i]
            p=p+2;
        } else{
            arr[n] = nums[i]
            n=n+2;
        }
    }

    return arr;
};