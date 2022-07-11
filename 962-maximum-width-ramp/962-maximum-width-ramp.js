/**
 * @param {number[]} nums
 * @return {number}
 */

// [6,0,8,2,1,5]



var maxWidthRamp = function(nums) {
    let maxRamp = 0;
    
    for (let i = 0; i < nums.length;i++) {
        if (nums.length - i - 1 < maxRamp) break;
        let j = nums.length - 1;
        let currentRamp = 0;
        
        while (!currentRamp && j > i) {
            if (nums[j] - nums[i] >= 0) currentRamp = j-i;
            j--;
        }
        
        if (currentRamp > maxRamp) maxRamp = currentRamp;
    }
    return maxRamp;
};

//two pointer method. Once second pointer finds a valid value, break.
// Once the first pointer gets to the element minus the current maxWidth break the loop