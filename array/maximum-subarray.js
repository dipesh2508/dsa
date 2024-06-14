// brute force
// time complexity: O(n^2)
// space complexity: O(1)
var maxSubArray = function(nums) {
    let max = nums[0];
    for(let i=0; i<nums.length; i++){
        let sum = 0;
        for(let j=i; j<nums.length; j++){
            sum+=nums[j];
            if(sum>max){
                max = sum;
            }
        }
    }

    return max;
};

// optimized solution
// time complexity: O(n)
// space complexity: O(1)

var maxSubArray = function(nums) {
    let max = nums[0];
    let sum = 0;
    for(let i=0; i<nums.length; i++){

        sum +=nums[i]
        if(sum>max){
            max=sum;
        }
        if(sum<0){
            sum=0;
        }
    }

    return max;
};

let nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums)); // 6