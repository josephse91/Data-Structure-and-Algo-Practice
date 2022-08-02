/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */

/* Notes from Neetcode video
    When a question ask for encoding. Its suggesting that you want to create a new string with the old string. In this case, we are compiling the list of strings into a singular string. 

*/


var encode = function(strs) {
    let str = "";
    
    for (let i = 0; i < strs.length; i++) {
        let currStr = strs[i].length + "#" +strs[i]
        str += currStr;
    }
    return str
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    console.log(s)
    let output = [];
    
    let i = 1;
    let sizeStr = s[0];
    
    while (i < s.length) {
        if (s[i] === "#") {
            let size = Number(sizeStr);
            sizeStr = "";
            let nextDelimiter = i + size;
            
            output.push(s.slice(i+1,nextDelimiter+1))
            i = nextDelimiter + 1;
        } else {
            sizeStr += s[i]
            i++
        }
        
    }
    return output;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */