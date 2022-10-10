/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
};

var search = function (nums,target,left = 0,right = nums.length - 1) {
    if ((left >= right && nums[left] !== target)) return -1;
    
    let mid = Math.floor((left + right)/ 2);
    if (nums[mid] === target) return mid;
    
    if (nums[mid] > target) {
        return search(nums,target,left,mid - 1)
    } else if (nums[mid] < target) {
        return search(nums,target,mid + 1,right)
    } 
}