let nums= [0,0,1,1,1,2,2,3,3,4];
let k= 1;

// space complexity: O(1)
// time complexity: O(n)
for(let i = 1; i<nums.length; i++){
    if(nums[i]!==nums[i-1]){
        nums[k] = nums[i];
        k++;
    }
}
console.log(nums)
console.log(k)