/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums,left = 0,right = 0) {
    
    while (right < nums.length) {
        if (nums[left] || nums[right]) {
            [nums[left],nums[right]] = [nums[right],nums[left]];
            left++
        }
        right++
    }
    return nums
};