/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longestStr = "";
    
    for (let i = 0; i < s.length; i++) {
        let currPalOdd = findPal(i,"odd");
        let currPalEven = findPal(i,"even");
        
        currPal = currPalOdd.length > currPalEven.length ? currPalOdd : currPalEven;
        
        if (currPal.length > longestStr.length) {
            longestStr = currPal
        }
    }
    
    function findPal(i,type) {
        let j = type === "odd" ? i - 1 : i 
        let k = i + 1;
        let str = type === "odd" ? s[i] : "";
        
        let inBounds = j >= 0 && k < s.length;
        
        while (s[j] === s[k] && inBounds) {
            str = s[j] + str + s[k];
            j--;
            k++;
            inBounds = j >= 0 && k < s.length
        }
        
        return str;
    }
    
    return longestStr;
};