// brute force
// time complexity O(n^2)
// space complexity O(1)

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    for(let i=0; i<prices.length-1; i++){
        for(let j=i+1; j<prices.length; j++){
            if((prices[j]-prices[i])>max){
                max = prices[j]-prices[i];
            }
        }
    }

    return max;
};

// optimized solution
// time complexity O(n)
// space complexity O(1)
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Number.POSITIVE_INFINITY;
    let max = 0;
    for(let i=0; i<prices.length; i++){
        if(min>prices[i]){
            min = prices[i]
        }

        if(max < prices[i] - min){
            max = prices[i] - min
        }

    }


    return max;
};