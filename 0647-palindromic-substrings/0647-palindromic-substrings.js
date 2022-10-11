/**
 * @param {string} s
 * @return {number}
 */

var countSubstrings = function(s) {
    let output = 0;
    
   for (let i = 0; i < s.length; i++) {
        output += findPalindrome(i,true) + findPalindrome(i,false);
    }

    return output;
    
    function findPalindrome(index,odd) {
        let count = 0;
        let i = index, j = odd ? index : index + 1;
        
        while (i >= 0 && j < s.length) {
            if (s[i] === s[j]) {
                count++;
            } else break;
            i--;
            j++;
        }
        // console.log(index,odd,count)
        return count;
    }
};

/*
var countSubstrings = function(s) {
    let output = 0;
    let count = 1;
    
    while(count <= s.length) {
       for (let i = 0; i <= s.length - count; i++) {
            let str = s.slice(i,count + i);
            if (findPalindrome(str)) output++
        }
        count++
    }
    
    return output;
    
    function findPalindrome(string) {
        let i = 0;
        let j = string.length - 1;
        
        while (i < j) {
            if (string[i] !== string[j]) return false;
            i++;
            j--;
        }
        
        return true;
    }
};
*/