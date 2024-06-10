// brute force solution
// Time complexity: O(n^2)
// Space complexity: O(1)

function twoSum(nums, target) {
    let arr= [];
    let counter = 0;
    for(let i=0; i<nums.length; i++){
        for(let j= 0; j<nums.length; j++){
            if(nums[i]+nums[j] === target && i!==j){

                arr = [i, j]
                counter++;
            }
        }
        if(counter>0){
            break;
        }
    }
    return arr;
};

let nums = [2,7,11,15]
let target = 9
console.log(twoSum(nums, target)) // [0,1]
nums = [3,2,4]
target = 6
console.log(twoSum(nums, target)) // [1,2]
nums = [3,3]
target = 6
console.log(twoSum(nums, target)) // [0,1]