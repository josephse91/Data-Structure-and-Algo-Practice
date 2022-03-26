// https://leetcode.com/problems/two-sum/

let twoSum = function(nums, target) {
    let pairs = {};

    for (let i = 0; i < nums.length; i++) {
        if (pairs[target - nums[i]]) {
            return [i, nums.indexOf(target-nums[i])]
        } else {
            pairs[nums[i]] = true;
        }
    }
    return null;
};

nums1 = [2,7,11,15]
target1 = 9
// [0,1]
nums2 = [3,2,4]
target2 = 6
// [1,2]
nums3 = [3,3]
target3 = 6
// [0,1]

console.log(twoSum(nums1,target1))
console.log(twoSum(nums2,target2))
console.log(twoSum(nums3,target3))