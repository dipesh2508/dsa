//time complexity: O(n)
//space complexity: O(n)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums) {
    const struc = new Map()
    for (let i of nums) {
        if (struc.has(i)) {
            struc.set(i, struc.get(i) + 1)
            continue;
        }
        struc.set(i, 1)
    }

    for (let value of struc.values()) {
        if(value > 2){
            return false;
        }
    }

    return true;
};

//driver code
console.log(isPossibleToSplit([1, 2, 3, 1, 2, 4])); // true
console.log(isPossibleToSplit([1, 2, 3, 1, 2, 3])); // true
console.log(isPossibleToSplit([1, 1, 1, 1])); // false