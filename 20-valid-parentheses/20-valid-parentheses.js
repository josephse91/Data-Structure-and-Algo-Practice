/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let char = {"(":")", "{":"}", "[": "]"};
    
    for (let i = 0; i < s.length; i++) {
        let lastIdx = stack.length - 1;
        let top = stack[lastIdx]
        
        if (char[top] && char[top] === s[i]) {
            stack.pop();
        } else {
           stack.push(s[i]); 
        }
        // console.log(s,i,s[i],char[s[lastIdx]],stack)
    }
    
    return stack.length ? false : true;
};