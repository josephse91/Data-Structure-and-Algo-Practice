/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b);
    let output = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        let p1 = i+1;
        let p2 = nums.length - 1;
        
        currNum = nums[i];
        prevNum = i - 1 >= 0 ? nums[i-1] : null;
        
        if (currNum === prevNum) continue;
        
        while (p1 < p2) {
            sum = nums[i] + nums[p1] + nums[p2];
            
            if (sum === 0) {   
                output.push([nums[i],nums[p1],nums[p2]]);
                p1++;
                p2--
                while (p1 < p2 && nums[p1] === nums[p1 - 1]) {
                    p1++;
                }
                continue;
            }
            if (sum > 0) p2--
            if (sum < 0) p1++
        }
    }
    return output;
};