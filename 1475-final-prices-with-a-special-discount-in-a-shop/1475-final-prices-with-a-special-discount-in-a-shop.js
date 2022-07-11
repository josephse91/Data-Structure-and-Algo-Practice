/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let len = prices.length
    let result = [prices[len - 1]];
    
    for (let i = prices.length - 2; i>=0; i--) {
        let discount = 0;
        
        for (let j=i+1;j< prices.length;j++) {
            let currentDiscount = prices[i] - prices[j]

            if (currentDiscount >= 0) {
                discount = prices[j];
            }
            
            if (discount) break;
        }
        let price = prices[i] - discount;
        result.unshift(price);
    }
    return result;
};