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

//driver code

let arr = [5,7,7,8,8,10];
let n = arr.length;
let x = 8;
let result = searchRange(arr, x); 
console.log(result); // [3, 4]