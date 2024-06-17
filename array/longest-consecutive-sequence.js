//sorting solution
// time complexity O(nlogn)
// space complexity O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    nums.sort((a,b)=> a-b)
    let count = 0, largest = 0, last = Number.MIN_VALUE;
    for(let i=0; i<nums.length; i++){
        if(nums[i]-1 == last){
            count++;
            last = nums[i]
        } else if(last != nums[i]){
            count = 1;
            last = nums[i]
        }
        largest = Math.max(count, largest)
    }
    return largest;
};

// hashset solution
// time complexity O(n)
// space complexity O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let n = nums.length;
    if (n === 0)
        return 0;

    let longest = 1;
    let st = new Set();

    for (let i = 0; i < n; i++) {
        st.add(nums[i]);
    }

    st.forEach((e)=>{
        if (!st.has(e - 1)) {
            let count = 1;
            let x = e;
            while (st.has(x + 1)) {
                x = x + 1;
                count = count + 1;
            }
            longest = Math.max(longest, count);
        }
    })

    return longest;
};

//driver code
let arr = [100, 4, 200, 1, 3, 2]
console.log(longestConsecutive(arr)); // 4