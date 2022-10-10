/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let output = [];
    
    backtrack = function(index, subset = []) {
        if(index >= nums.length) {
            output.push([...subset]);
            return;
        }
        
        backtrack(index + 1, [...subset, nums[index]]);
        backtrack(index + 1, [...subset]);
    }
    
    backtrack(0, []);
    return output;
};
