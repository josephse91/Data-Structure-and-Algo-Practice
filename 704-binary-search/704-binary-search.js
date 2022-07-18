/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (!nums.length) return -1;
    
    let leftIdx = 0;
    let rightIdx = nums.length - 1;
    
    if (nums[leftIdx] === target) return leftIdx;
    if (nums[rightIdx] === target) return rightIdx;
    
    let midIdx = Math.floor((rightIdx - leftIdx) / 2)
    
    while (midIdx > leftIdx && midIdx < rightIdx) {
        if (nums[midIdx] === target) return midIdx;
        
        if (target > nums[midIdx]) {
            leftIdx = midIdx;
        } else {
            rightIdx = midIdx;
        }
        midIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2)
    }
    
    return nums[midIdx] === target ? midIdx : -1;
};