/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length <= 2) return Math.max(...nums);
    
    let block1 = nums.slice(0,nums.length - 1);
    let block2 = nums.length > 1 ? nums.slice(1) : [];
    
    return Math.max(robHelper(block1),robHelper(block2));
};

let robHelper = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        let neighbor1 = i + 2 < nums.length ? nums[i+2] : 0;
        let neighbor2 = i + 3 < nums.length ? nums[i+3] : 0;
        
        nums[i] = nums[i] + Math.max(neighbor1,neighbor2);
    }
    return Math.max(nums[0],nums[1])
}