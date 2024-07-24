//linear search
// time complexity O(n)
// space complexity O(1)

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let x=-1;
    for(let i=0; i<num.length; i++){
        if(num[i]%2 != 0){
                x=num.substring(0, i+1)
        }
    }

    if(x==-1){
        return ""
    }
    return x;
};

//driver code
console.log(largestOddNumber("35427")) //35427
console.log(largestOddNumber("52")) //5