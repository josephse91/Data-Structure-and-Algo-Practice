// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/* Two pointer method
    Pattern: We are looking for the largest difference between elements where the first element must be less than the last element, 

    There are two large cases:
    Case 1 - the difference between pointer 1 and pointer 2 is positive, in which case, we must reset pointer 1 to pointer 2's position. Also reset pointer to one element over. 

    Case 2 - The difference between pointer 1 and pointer 2 is negative, in which case we move pointer 2 to the right. 

    As we move pointer 2 to the right, we must log the difference between the smallest difference and the current difference. If the current difference is smaller, replace the smallest difference.


*/

var maxProfit = function (prices) {
    let left = 0;
    let right = 1;
    let diff = 0;

    while (right < prices.length) {
        let newDiff = prices[left] - prices[right];

        if (newDiff > 0) {
            left = right;
            right = left + 1;
        } else {
            if (newDiff < diff) {
                diff = newDiff;
            }
            right++;
        }
    }
    return Math.abs(diff);
};

prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1));
prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2));
