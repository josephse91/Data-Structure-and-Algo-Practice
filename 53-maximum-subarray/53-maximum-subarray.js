/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    
    let i = 0, j = 0;
    let currSum = nums[i];
    
    while (j < nums.length) {
        if (currSum < 0 && nums[j] < 0) {
            while (nums[j] < 0) {
               i = j + 1;
                j = j+1;
                if (nums[i] > currSum) currSum = nums[i]; 
            }
            
        } else {
            j++
            currSum += nums[j];
        }
        if (currSum > max) {
            max = Math.max(currSum,max)
        }
    }
    return max
};