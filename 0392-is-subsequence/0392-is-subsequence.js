/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s === "" && t === "") return true;
    let left = 0, right = 0;
    
    while (left < s.length && right < t.length) {
        if (s[left] === t[right]) {
            left++;
        }
        right++
    }
    return left === s.length
};