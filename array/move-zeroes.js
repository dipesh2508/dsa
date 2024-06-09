let nums = [0, 1, 0]


// brute force
// space complexity: O(1)
// time complexity: O(n^2)
for(let i=0; i<nums.length; i++){
    for(let j=0; j<nums.length-1; j++){
        if(nums[j]===0){
            let temp = nums[j];
            nums[j] = nums[j+1];
            nums[j+1] = temp;
        }
    }
}


// javascript splice method
// space complexity: O(1)
// time complexity: O(n)
for(let i=nums.length-1; i>=0; i--){
    if(nums[i] === 0){
        nums.splice(i, 1)
        nums.push(0)
    }
}

console.log(nums)