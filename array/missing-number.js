let nums = [3,0,1];

// brute force
// Time complexity: O(n^2)
// Space complexity: O(1)
function missingNumber(nums){
    for(let i = 0; i<=nums.length; i++){
        let temp = 0;
        for(let j = 0; j<nums.length; j++){
            if(nums[j]===i){
                temp++;
            }
        }

        if(temp===0){
            return i;
        }
    }
};


// using sum formula
// Time complexity: O(n)
// Space complexity: O(1)
function missingNumber(nums) {
    let n = nums.length;
    const sum = (n*(n+1))/2;
    let incompleteSum = 0;

    for(let i=0; i<n; i++){
        incompleteSum+=nums[i];
    }

    return sum-incompleteSum;
};