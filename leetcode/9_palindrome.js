// https://leetcode.com/problems/palindrome-number/

var isPalindrome = function (x) {
    num = x;
    let numString = num.toString();
    let idx = numString.length - 1;
    let mid = Math.floor(idx / 2);

    for (let i = 0; i <= mid; i++) {
        if (numString[i] != numString[idx - i]) return false;
    }
    return true;
};
