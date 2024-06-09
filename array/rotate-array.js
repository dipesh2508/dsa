let nums = [1,2,3,4,5,6,7];
let k =3;

// unoptimized solution
// time complexity: O(n*k)
// space complexity: O(1)
for(let i = 0; i<k; i++){
    for(let j = nums.length-1; j>0; j--){
        let temp = nums[j];
        nums[j] = nums[j-1];
        nums[j-1] = temp;
    }
}

// optimized solution
// time complexity: O(n)
// space complexity: O(1)
for(let i = 0; i<k; i++){
    let temp = nums.pop();
    nums.unshift(temp);
}