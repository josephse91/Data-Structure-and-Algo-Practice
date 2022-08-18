/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let char = {};
    let count = 0;
    let start = 0;
    
    for (let i = 0; i < s.length; i++) {
        
        if (char[s[i]] >= start) {
            start = char[s[i]] + 1;
        } 
        char[s[i]] = i;
        count = Math.max(i - start + 1,count)
    }
    return count;
};