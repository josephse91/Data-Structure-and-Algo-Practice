/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length < 3) return Math.max(...nums)
    for (let i = nums.length - 3; i >= 0; i--) {
        let skip = i + 2 < nums.length ? nums[i+2] : 0;
        let skipFollow = i + 3 < nums.length ? nums[i+3] : 0;
        
        nums[i] += Math.max(skip,skipFollow)
    }
    
    return Math.max(nums[0],nums[1])
};