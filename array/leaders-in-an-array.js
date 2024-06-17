//bruteforce solution
// time complexity O(n^2)
// space complexity O(n)


// User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number[]}
 */
function leaders(n, arr) {
    // code here
    let newArr = [];

    for (let i = 0; i < n; i++) {
        let flag = 0;

        for (let j = i + 1; j < n; j++) {
            if (arr[i] < arr[j]) {
                flag++
                break;
            }
        }

        if (flag == 0) {
            newArr.push(arr[i])
        }
    }

    return newArr;
}

// optimal solution
// time complexity O(n)
// space complexity O(n)
function leaders(n, arr) {
    let newArr = [];
    let max = arr[n - 1]
    for (let i = n - 1; i >= 0; i--) {
        if (max <= arr[i]) {
            max = arr[i]
            newArr.push(max)
        }
    }

    return newArr.reverse();
}


//driver code
let arr = [16, 17, 4, 3, 5, 2]
let n = arr.length
console.log(leaders(n, arr)); // [17, 5, 2]