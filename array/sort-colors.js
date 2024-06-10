/**
 Do not return anything, modify nums in-place instead.
 */
 function sortColors(nums) {
    let hash = new Array(3).fill(0);
    let n = nums.length;
    for(let i =0; i<n; i++){
        hash[nums[i]]++;
    }

    for(let i = 0; i<3; i++){
        for(let j=0; j<hash[i]; j++){
            nums.push(i)
        }
    }

    for(let i = 0; i<n; i++){
        nums.shift()
    }

    return nums;
};

let nums = [2,0,2,1,1,0]
console.log(sortColors(nums)) // [0,0,1,1,2,2]
nums = [2,0,1]
console.log(sortColors(nums)) // [0,1,2]
nums = [0]
console.log(sortColors(nums)) // [0]