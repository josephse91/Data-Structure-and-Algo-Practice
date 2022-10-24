/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let words = s.split(" ").filter(word => word !== "");
    return words[words.length - 1].length
};