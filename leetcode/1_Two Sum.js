// https://leetcode.com/problems/two-sum/

/* HASH MAP SOLUTION
Initiate an empty object(pairs). This will be used to check for corresponding pair value.    
Iterate through the array, at each element, we are going to check for its corresponding pair in the object. If it is there, return the value. If not, add the current element into the pair object with a value of true. 

This results in a linear time complexity
*/

/* OTHER SOLUTIONS
    Sorting - We can sort the array using a n * log(n) algorithm. Then start at the ends of the array and wor inwards until there is a match.

    Nested loop - Run through every pair and once there is a pair that adds up to the total, return true
*/
let twoSum = function (nums, target) {
    let pairs = {};

    for (let i = 0; i < nums.length; i++) {
        if (pairs[target - nums[i]]) {
            return [i, nums.indexOf(target - nums[i])];
        } else {
            pairs[nums[i]] = true;
        }
    }
    return null;
};

nums1 = [2, 7, 11, 15];
target1 = 9;

// [0,1]

nums2 = [3, 2, 4];
target2 = 6;

// [1,2]

nums3 = [3, 3];
target3 = 6;

// [0,1]

console.log(twoSum(nums1, target1));
console.log(twoSum(nums2, target2));
console.log(twoSum(nums3, target3));
