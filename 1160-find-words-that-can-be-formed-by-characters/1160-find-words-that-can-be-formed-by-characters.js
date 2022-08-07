/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let availableChars = {};
    let output = 0;
    
    for (let i = 0; i < chars.length; i++) {
        availableChars[chars[i]] ? availableChars[chars[i]]++ : availableChars[chars[i]] = 1;
    }
    for (let n = 0; n < words.length; n++) {
        let word = words[n]
        let currChar = {...availableChars};
        
        for (let j = 0; j < word.length; j++) {
            if (!currChar[word[j]]) break;   
            currChar[word[j]]--
            
            if (j === word.length - 1) output += word.length
        }
    }
    return output;
};