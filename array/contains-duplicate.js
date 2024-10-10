//time complexity: O(n)
//space complexity: O(n)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const num = new Set();

    for(const i of nums){
        if(num.has(i)){
            return true;
        }

        num.add(i);
    }

    return false;
};

//driver code
console.log(containsDuplicate([1,2,3,1])); // true
console.log(containsDuplicate([1,2,3,4])); // false