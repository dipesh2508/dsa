// time complexity: O(n)
// space complexity: O(1)

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    let ans = 0;

    for (let i = 0; i < s.length - 1; i++) {
        ans += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1))
    }

    return ans;
};

//driver code
console.log(scoreOfString("acb")); // 3
console.log(scoreOfString("cba")); // 2
console.log(scoreOfString("abcd")); // 3
console.log(scoreOfString("hello")); // 13