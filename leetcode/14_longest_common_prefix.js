// https://leetcode.com/problems/longest-common-prefix/

/* METHOD 1
    First, I decided to make the first word of the strs array the reference word. Conceptually, if this word is the shortest word, the maximum number of matching characters would be this word.

    Iterate through each letter in this reference word. At each letter, check if the letter is within each word of the array. If it is in all words, add that letter to the longestPrefix string. Break out of the loop once there is no match
*/

/* EFFICIENT SOLUTION
    Similarly, iterate through the letters of the first word of the array of strings. At each letter, if the letter is not found within all of the words, return the word up to but not including that letter.

    With this method, we only need to create a new string one time
*/
var longestCommonPrefix = function (strs) {
    if (strs.length === 1) return strs[0];
    let str = strs[0];
    longestPrefix = "";

    if (str === longestPrefix) return longestPrefix;

    let match = true;
    while (match) {
        for (let i = 0; i < str.length; i++) {
            match = false;
            let currentPrefix = longestPrefix + str[i];
            match = strs.every((word) => word.startsWith(currentPrefix));
            if (match) {
                longestPrefix = currentPrefix;
            } else {
                match = false;
                break;
            }
        }
    }
    return longestPrefix;
};

/* EFFICIENT SOLUTION */
let longestCommonPrefix = function (strs) {
    if (!strs.length) {
        return "";
    }
    for (let i = 0; i < strs[0].length; i++) {
        for (let s of strs) {
            if (s[i] !== strs[0][i]) {
                return s.slice(0, i);
            }
        }
    }
    return strs[0];
};

strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1));
strs2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs2));
