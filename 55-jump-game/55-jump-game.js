/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let container = new Array(nums.length).fill(false);
    let lastIdx = container.length - 1;
    container[lastIdx] = true;
    
    for (let i = lastIdx - 1; i >= 0; i--) {
        if (i + nums[i] > lastIdx) {
            container[i] = true;
            continue;
        }
        let j = 1;
        
        while (j <= nums[i]) {
            if (container[i + j]) {
                container[i] = true;
                break;
            }
            j++;
        }
    }
    return container[0]
};