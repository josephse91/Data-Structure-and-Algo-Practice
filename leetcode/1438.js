// https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/

// Solution reference: https://www.youtube.com/watch?v=LDFZm4iB7tA

// var longestSubarray = function(nums, limit) {
//     if (nums.length <= 1) return 1;
//     let topRange = nums[0];
//     let bottomRange = nums[1]
// }

// /*
var longestSubarray = function(nums, limit) {
    
    let size = 0;
    let [topRange, bottomRange] = [nums[0], nums[0]]
    let j = 0;
    
    for (let i = 0; i < nums.length;i++) {
        
        while (diff <= limit) {
            j++
            topRange = nums[j] > topRange ? nums[j] : topRange;
            bottomRange = nums[j] < bottomRange ? nums[j] : bottomRange;

            if (j - i > size) {
                size = j - i + 1
            }
        }
        

        let diff = topRange - bottomRange;
        
        for (let j = i + 1; j < nums.length; j++) {
            
            let newSize = j - i + 1;
            if (diff > limit) break;
            if (diff <= limit && newSize > size) {
                size = newSize;
            };
            // console.log(i,j,nums[i],nums[j],topRange,bottomRange)
        }
    }

    return size;
};
// */

nums1 = [8,2,4,7];
// console.log(longestSubarray(nums1,4));
nums2 = [10,1,2,4,7,2];
// console.log(longestSubarray(nums2,5));
nums3 = [4,2,2,2,4,4,2,2]
// console.log(longestSubarray(nums3,0));
nums4 = [4,8,5,1,7,9]
console.log(longestSubarray(nums4,6));