/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0;
    let currentCount = 0;
    for (let i = 0;i < nums.length; i++) {
        currentCount = nums[i] ? currentCount + 1 : 0;
        
        if (currentCount > maxCount) {
            maxCount = currentCount;
        }
    }
    return maxCount;
};