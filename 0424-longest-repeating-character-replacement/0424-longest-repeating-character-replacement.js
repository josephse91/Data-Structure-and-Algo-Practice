/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0, right = 0;
    let count = k;
    let chars = new Map();
    chars.set(s[0],0);
    
    let leadCount = 0;
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
        
        let rightVal = (chars.get(s[right]) || 0);
        let iterate = right < s.length ? 1: 0;
        chars.set(s[right], rightVal + iterate);
        right++
        leadCount = Math.max(...chars.values(),leadCount)
    }
    
    return leadCount + (k - count);
};

// if char is not leading char and k remaining, subtract k by 1
// if char is not leading and k is zero, move right pointer
// if it is leading char move right pointer