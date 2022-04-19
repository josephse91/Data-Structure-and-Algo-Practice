// https://leetcode.com/problems/3sum-closest/

/* ITERATE THROUGH ELEMENT WITH LEFT/RIGHT POINTERS
    I iterated through each element. At each element, I created a left and right pointer for the remaining elements which I cycled through.
*/

var threeSumClosest = function (nums, target) {
    nums = nums.sort((a, b) => a - b);
    let sum = Infinity;
    let difference = sum - target;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        if (nums[i] === nums[i - 1]) continue;

        while (left < right) {
            let newSum = nums[i] + nums[left] + nums[right];
            currentDiff = Math.abs(newSum - target);

            if (currentDiff < difference) {
                sum = newSum;
                difference = currentDiff;
            }

            if (newSum === target) return target;
            if (newSum < target) left++;
            if (newSum > target) right--;
        }
    }
    return sum;
};

nums1 = [-1, 2, 1, -4];
nums1 = [1, 2, 4, 8, 16, 32, 64, 128];
console.log(threeSumClosest(nums1, 82));
