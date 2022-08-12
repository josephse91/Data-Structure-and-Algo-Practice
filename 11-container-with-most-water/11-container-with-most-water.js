/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    
    let i = 0, j = height.length - 1;
    while (i < j) {
        let minHeight = Math.min(height[i], height[j]);
        let minIdx = height[i] === minHeight ? i : j;
        
        let currArea = minHeight * (j-i);

        if (currArea > maxArea) {
            maxArea = currArea;
        }
        
        minIdx === i ? i++ : j--;
    }
    
    return maxArea;
};