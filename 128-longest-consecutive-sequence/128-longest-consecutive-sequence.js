/**
 * @param {number[]} nums
 * @return {number}
 */

/* 

*/


function longestConsecutive(nums) {
    let len = nums.length;
    if (!len) {
        return 0;
    }
    const set = new Set(nums);
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (set.has(num - 1)) {
            continue;
        }

        let currentMax = 1;
        while (set.has(num + currentMax)) {
            currentMax++;
        }

        if (currentMax > max) {
            max = currentMax;
        }
        if(max > len/2){
            break;
        }
    }

    return max;
}