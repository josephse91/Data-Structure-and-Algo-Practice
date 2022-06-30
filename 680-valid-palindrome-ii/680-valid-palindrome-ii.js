/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s,count = 1) {
    
    let j = s.length - 1;
    for (let i = 0; i < s.length; i++) {
        console.log(i,j,s[i],s[j])
        if (s[i] !== s[j] && count > 0) {
            
            let removeRight = s.slice(i,j)
            let removeLeft = s.slice(i+1,j+1)
            
            let innerPalindrome = validPalindrome(removeRight,0) || validPalindrome(removeLeft,0);
            return innerPalindrome;
        }
        
        if (s[i] !== s[j]) return false;
        if (i >= j) return true
        j--;
    }
    return true;
};

/* Indentifying a Palindrome can be done by:

1) Using two pointer method until we meet in the middle - O(n)

Note to self:
Be sure to place the iterator of the second pointer in the correct position
Also, if there is an even number of digits, i and j pointers will not be equal to each other, so the condition should be when i is less than j
*/