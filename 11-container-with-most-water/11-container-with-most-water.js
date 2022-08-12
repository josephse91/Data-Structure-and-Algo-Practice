/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    
    for (let i = 0; i < height.length; i++) {
        let maxPoss = height[i] * (height.length - i);
        if (maxPoss < maxArea) continue;
        for (let j = 0; j < height.length; j++) {
            
            let minHeight = Math.min(height[i], height[j]);
            let currArea = minHeight * (j - i);
            
            maxArea = Math.max(currArea,maxArea);
        }
    }
    
    return maxArea;
};