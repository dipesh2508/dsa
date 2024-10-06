//time complexity: O(n)
//space complexity: O(1)

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {

    let ans = 0;

    for(let i=0; i<operations.length; i++){
        if(operations[i]==="++X" || operations[i]==="X++"){
            ans++;
        } else if(operations[i]==="--X" || operations[i]==="X--"){
            ans--;
        }
    }

    return ans;
};

//driver code
console.log(finalValueAfterOperations(["X++","++X","--X","X--"])) //0
console.log(finalValueAfterOperations(["++X","++X","X++"])) //3
console.log(finalValueAfterOperations(["X++","X++","X++"])) //3
console.log(finalValueAfterOperations(["X++","X++","X++","X++","X++","X++","X++","X++","X++","X++"])) //10