/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let ans = 0;

    for (let i = 0; i < s.length; i++) {
        let x = values[s[i]];
        let y = values[s[i + 1]]

        if (x < y) {
            ans = ans + y - x;
            i++;
        } else {
            ans += x;
        }

    }
    return ans;
};

//driver code
console.log(romanToInt("III")) //3
console.log(romanToInt("IV")) //4
console.log(romanToInt("CM")) //900
console.log(romanToInt("MCMXCIV")) //1994