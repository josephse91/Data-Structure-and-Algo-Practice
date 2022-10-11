/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function(nums) {
    let left = 0, right = nums.length - 1;
    
    while (left < right) {
        if (nums[left] < nums[right]) return nums[left]
        let mid = Math.floor((left + right) / 2)
        let midVal = nums[mid];
        if (midVal < nums[left]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return nums[left]
};

/*
var findMin = function(nums) {
    if (nums.length < 2) return nums[0]
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        if (nums[left] < nums[right]) return nums[left]
        if (right - left === 1) return nums[right]
        
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] < nums[left]) {
            right = mid;
        } else {
            left = mid;
        }
    }
    return nums[left]
};

*/

/* Cases

1) If the first element of the array is greater than the last element of the array, the array has been rotated. If not, then the minimum value is the first element

2) If rotated, is the mid value less than the first element, if so, right equals midpoint.
   Else the left should equal the midpoint because the rotation is beyond
   
*/