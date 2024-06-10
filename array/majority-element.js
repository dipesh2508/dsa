// hash map solution
// Time complexity: O(n)
// Space complexity: O(n)

function majorityElement(nums) {
    let hashMap = new Map();
    for(let i=0; i<nums.length; i++){
        if(hashMap.has(nums[i])){
            let count = hashMap.get(nums[i])
            hashMap.set(nums[i], ++count);
        } else {
            hashMap.set(nums[i], 1);
        }
    }
    
    for(let [key, value] of hashMap){
        if(value> nums.length/2){
            return key;
        }
    }
};

let nums = [3,2,3];
console.log(majorityElement(nums)); // 3
nums = [2,2,1,1,1,2,2];
console.log(majorityElement(nums)); // 2
nums = [1];
console.log(majorityElement(nums)); // 1
nums = [6,5,5];
console.log(majorityElement(nums)); // 5