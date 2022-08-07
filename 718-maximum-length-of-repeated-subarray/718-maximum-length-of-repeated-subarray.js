/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;
    let res = 0;
    
    let dp = new Array(n1 + 1).fill().map(() => new Array(n2 + 1).fill(0));
    
    for(let i = 1; i <= n1; i++) {
        for(let j = 1; j <= n2; j++) {
            if(nums1[i-1] == nums2[j-1]) {
				// Since we want a subarray of nums1 AND nums2
				// we need to make sure its continuous with the
				// dp[i-1][j-1] location :) 
                dp[i][j] = dp[i - 1][j - 1] + 1;
                res = Math.max(res, dp[i][j])
            } 
        }
    }

    return res;        
};

/* Looking for the maximum length. Just an integer
Immediately, I'm thinking, does the order matter. Building test cases, I need just 1 subarray, and subarray in different order
After testing a case, it appears that order doesn't matter

find all subarrays then linearly match if the subarrays contain the same elements.

Because the order of the elements matter when comparing the subarrays, the algorithm we should use is tabulation.


*/