// https://leetcode.com/problems/3sum/

/* ITERATE THROUGH ELEMENT WITH LEFT/RIGHT POINTERS
    I iterated through each element. At each element, I created a left and right pointer for the remaining elements which I cycled through.
*/

var threeSum = function (nums) {
    if (nums.length < 3) return [];
    nums = nums.sort((a, b) => a - b);

    let left, right;
    let result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        left = i + 1;
        right = nums.length - 1;

        // This skips any pointer that is pointing at a value that has already been reviewed
        if (nums[i] === nums[i - 1]) continue;

        while (left < right) {
            sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                // Upon finding the three sums, it is important to note that if there are any repeat values, they would be adjacent to the left or right pointers. In which case, we need to skip to the very last iteration of a repeated number.
                while (nums[left] === nums[left + 1] || nums[right] === nums[right - 1]) {
                    if (nums[left] === nums[left + 1]) left++;
                    if (nums[right] === nums[right - 1]) right--;
                }
                let combo = [nums[i], nums[left], nums[right]];
                result.push(combo);

                right--;
            }

            if (sum < 0) left++;
            if (sum > 0) right--;
        }
    }
    return result;
};

nums1 = [-1, 0, 1, 2, -1, -4];
// nums1 = [0, 0, 0, 0];
console.log(threeSum(nums1));
