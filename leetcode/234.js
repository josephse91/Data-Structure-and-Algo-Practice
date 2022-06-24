// https://leetcode.com/problems/palindrome-linked-list/

var isPalindrome = function (head) {
    if (head.next === null) return true;
    let palindromeArray = [];

    while (head) {
        palindromeArray.push(head.val);
        head = head.next;
    }

    let midPoint = Math.floor(palindromeArray.length - 1 / 2);
    let last = palindromeArray.length - 1;
    for (let i = 0; i <= midPoint; i++) {
        if (palindromeArray[i] !== palindromeArray[last - i]) {
            return false;
        }
    }
    return true;
};
