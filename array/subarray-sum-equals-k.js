//brute force
// time complexity: O(n^2)
// space complexity: O(1)

// function subarry(nums, k) {
//     let count=0;
//     for(let i=0; i<nums.length; i++){
//         let sum = 0;

//         for(let j=i; j<nums.length; j++){
//             sum+=nums[j];
//             if(sum==k){
//                 count++
//             }
//         }
//     }
//     return count;
// }

// hashing
// time complexity: O(n)
// space complexity: O(n)

function subarry(nums, k) {
    let hashMap = new Map();
    let sum = 0;
    let count = 0;

    for(let i=0; i<nums.length; i++){
        sum+=nums[i];

        if(sum==k){
            count++;
        }

        let rem = sum-k;

        if(hashMap.has(rem)){
            count+=hashMap.get(rem);
        }

        if(!hashMap.has(sum)){
            hashMap.set(sum, 1);
        } else {
            hashMap.set(sum, hashMap.get(sum)+1);
        }
    }

    return count;
}

let nums = [1,1,1];
let k = 2;
console.log(subarry(nums, k)); // 2