/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    
    let chars = {"(":")","[":"]","{":"}"};
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let len = stack.length;
        
        if (len > 0 && chars[stack[len - 1]] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    return !stack.length
};