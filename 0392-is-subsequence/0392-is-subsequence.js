/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s === "" && t === "") return true;
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[0]) {
            s = s.slice(1);
        }
        if (!s.length) return true;
    }
    return false;
};