// https://leetcode.com/problems/roman-to-integer/

/* ITERATION METHOD
    Iterate through each letter. At each letter, if the letter value is less than the next letter, we subtract from the sum. Otherwise, we will simply add the value to the sum.
*/

var romanToInt = function (s) {
    let num = 0;
    let symbols = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

    for (let i = 0; i < s.length; i++) {
        letter = s[i];

        if (symbols[letter] < symbols[s[i + 1]]) {
            num -= symbols[letter];
        } else {
            num += symbols[letter];
        }
    }
    return num;
};

s1 = "III"; // 3
s2 = "LVIII"; // 58
s3 = "MCMXCIV"; // 1994

console.log(romanToInt(s1));
console.log(romanToInt(s2));
console.log(romanToInt(s3));
