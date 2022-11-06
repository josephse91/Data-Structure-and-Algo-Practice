/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let xor = 0;
    for (num of nums) {
        xor ^= num;
    }

    return xor;
};