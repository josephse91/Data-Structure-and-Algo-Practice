/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        if (s.charAt(left) != s.charAt(right)) {
            return isValid(left + 1, right) || isValid(left, right - 1);
        }
        left++;
        right--;
    }
    
    return true;
    
    
    function isValid(left, right) {
        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        
        return true;
    }
};