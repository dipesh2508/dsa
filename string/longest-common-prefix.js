/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let ans = ""
    let val = strs[0]

    if (strs.length == 1) {
        return val;
    }

    for (let i = 0; i < strs.length - 1; i++) {
        let str = strs[i + 1];
        ans = ''
        let flag = 0;
        for (let i in val) {
            if (val[i] !== str[i] || flag == 1) {
                flag = 1;
                break;
            }

            ans += str[i]
        }

        val = ans
    }

    return ans;
};

//driver code
console.log(longestCommonPrefix(["flower", "flow", "flight"])) //fl
console.log(longestCommonPrefix(["dog", "racecar", "car"])) //""
console.log(longestCommonPrefix(["ab", "a"])) //a