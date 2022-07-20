/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let visited = {};
    
    for (let i = 0; i < nums.length; i++) {
        let pairVal = target - nums[i];
        if (visited[pairVal] >= 0) return [visited[pairVal],i];
        visited[nums[i]] = i;
    }
};