// https://leetcode.com/problems/maximum-subarray/

/* ITERATION SUM SOLUTION
    The pattern found was that since we're looking for the contigusous subarray, I found that there is a pattern when we iterate backwards. If the currentsum is negative, we should reset the counter. At each iteration, we should alway check if the currentSum is greater than the total sum. 

    Since there is always a value in the array, we initiate the sum with the very first iteration value

    NOTE: If the problem doesn't specify that the location of indexes are required, chances are, I will not need to use indexes. AKA sum problems can be calculated with just sum tactics.
*/

var maxSubArray = function (nums) {
    let sum = nums[nums.length - 1];
    let currentSum = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        currentSum += nums[i];
        sum = currentSum > sum ? currentSum : sum;

        if (nums[i] < 0) {
            currentSum = currentSum < 0 ? 0 : currentSum;
        }
    }
    return sum;
};

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // Output: 6
console.log(maxSubArray(nums));

nums = [-1]; // Output: 1
console.log(maxSubArray(nums));

nums = [5, 4, -1, 7, 8]; // Output: 23
console.log(maxSubArray(nums));
