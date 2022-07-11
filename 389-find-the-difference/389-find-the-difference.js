/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sLetters = {};
    for (let i=0;i < s.length;i++) {
        sLetters[s[i]] ? sLetters[s[i]]++ : sLetters[s[i]] = 1;
    }
    
    for (let j=0; j < t.length;j++) {
        if (!sLetters[t[j]]) return t[j];
        sLetters[t[j]]--;
    }
    return letter
};