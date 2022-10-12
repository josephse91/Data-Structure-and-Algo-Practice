/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0, right = 0;
    let count = k; // count is important because we need to know how many times k has been used
    
    let chars = new Map(); // will log the letter counts within the window
    chars.set(s[0],0); // initialize the first letter with letter count
    
    let leadCount = 0; // will be used to keep track of leading letter within a window
    
    while (right < s.length) {
        if (chars.get(s[right]) !== leadCount) {
            if (count > 0) {
                count--;
            } else {
                let leftVal = chars.get(s[left])
                chars.set(s[left],leftVal - 1);
                left++
            }
        } 
        
        // whether there is a matching letter, or available k, the right pointer will always move.
        
        let rightVal = (chars.get(s[right]) || 0);
        chars.set(s[right], rightVal + 1);
        right++
        leadCount = Math.max(...chars.values(),leadCount)
        // leadCount always becomes the maximum letter count within any window
    }
    
    let usedKs = k - count;
    return leadCount + usedKs;
};

// if char is not leading char and k remaining, subtract k by 1
// if char is not leading and k is zero, move right pointer
// if it is leading char move right pointer