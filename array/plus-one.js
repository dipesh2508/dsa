//time complexity: O(n)
//space complexity: O(1)
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let n = digits.length - 1;

    function modifyLast(x) {
        if(digits[x]<9){
            digits[x]+=1
            return digits;
        }
        digits[x] = 0;
        if (x === 0) {
            digits.unshift(1)
            return digits;
        }
        return modifyLast(x - 1)
    }
    if (digits[n] === 9) {
        return modifyLast(n)
    } else {
        ans = digits.map((val, index) => {
            if (index === n) {
                return val + 1
            }
            return val
        })
        return ans;
    }
};

//driver code
console.log(plusOne([1, 2, 3])); // [1,2,4]
console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
console.log(plusOne([9])); // [1,0]