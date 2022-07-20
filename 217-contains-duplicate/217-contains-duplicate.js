/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let visited = {};
    for (let i = 0; i < nums.length; i++) {
        if (visited[nums[i]]) return true;
        visited[nums[i]] = true;
    }
    return false;
};