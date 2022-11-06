/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let found = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (found[nums[i]]) {
            found[nums[i]] += 1;
        } else {
            found[nums[i]] = 1
        }
    }
    let output
    Object.entries(found).forEach(([num,count]) => {
        if (count < 2) {
            output = num;
        }
    })
    return output
};