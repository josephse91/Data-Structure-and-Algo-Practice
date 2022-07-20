/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    letters = {};
    if (s.length != t.length) return false;
    
    for (let i = 0; i < s.length; i++) {
        letters[s[i]] ? letters[s[i]]++ : letters[s[i]] = 1;
    }
    
    for (let j = 0; j < t.length; j++) {
        if (!letters[t[j]]) return false;
        letters[t[j]]--
    }
    return true;
};