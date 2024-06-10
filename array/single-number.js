// brute force solution
// Time complexity: O(n^2)
// Space complexity: O(1)

function singleNumber(nums) {
    for(let i =0; i<nums.length; i++){
        let count = 0;
        for(let j= 0; j<nums.length; j++){
            if(nums[i] == nums[j]){
                count++;
            }
        }

        if(count==1){
            return nums[i]
        }
    }
};

let nums = [2,2,1]
console.log(singleNumber(nums)) 
nums = [4,1,2,1,2]
console.log(singleNumber(nums)) 