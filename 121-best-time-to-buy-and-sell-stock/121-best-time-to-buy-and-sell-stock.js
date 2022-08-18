/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    
    let buy = prices[0]
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > buy) {
            max = Math.max(prices[i] - buy,max)
        } else {
            buy = prices[i];
        }
    }
    
    return max;
};