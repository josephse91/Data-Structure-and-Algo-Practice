// https://leetcode.com/problems/merge-sorted-array/

/* INSERTION SORT METHOD SUCCESSFUL
    Iterate through the second number array. Make the element at "m" equal to the current number. Then iterate backwards through the first array comparing the inserted element with its preceeding elements. Swap the two values if the inserted value is less the the previous element. Do this until is it greater or equal to the preceeding element. 
    
    Note it is important to include the base case situation if there are no elements in the nums1 array.

    This is not the most efficient method but it works.
*/

var merge = function (nums1, m, nums2, n) {
    if (!m) {
        while (nums1.length) {
            nums1.shift();
        }
        nums1.push(...nums2);
        return nums1;
    }

    for (let i = 0; i < n; i++) {
        for (let j = m + i; j > 0; j--) {
            if (j === m + i) {
                nums1[m + i] = nums2[i];
            }

            if (nums1[j] >= nums1[j - 1]) break;
            swap(nums1, j, j - 1);
        }
    }
    return nums1;
};

function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

nums1 = [1, 2, 3, 0, 0, 0];
m = 3;
nums2 = [2, 5, 6];
n = 3; //Output: [1,2,2,3,5,6]
console.log(merge(nums1, m, nums2, n));
nums1 = [1];
m = 1;
nums2 = [];
n = 0; // Output: [1]
console.log(merge(nums1, m, nums2, n));
nums1 = [0];
m = 0;
nums2 = [1];
n = 1; // Output: [1]
console.log(merge(nums1, m, nums2, n));
