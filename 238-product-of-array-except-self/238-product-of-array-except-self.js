/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = [];
    let prefix = Array.from(nums, () => 1)
    let postfix = Array.from(nums, () => 1)
    
    for (let i = 1; i < nums.length;i++) {
        let j = nums.length - 1 - i;
        
        prefix[i] = prefix[i-1] * nums[i-1];
        postfix[j] = postfix[j+1] * nums[j+1]
    }
    
    for (let x = 0; x < prefix.length;x++) {
        let num = prefix[x] * postfix[x];
        output.push(num);
    }
    return output;
};