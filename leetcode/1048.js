// https://leetcode.com/problems/longest-string-chain/

var longestStrChain = function(words) {
    let max = 0
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > max) {
            max = words[i].length
        }
    }
    

};

function chainCount(words,start,level) {
    words.forEach(function (el) {
        if (el.length === level - 1) {

        }
    })
}

function checkSequence(word1,word2) {
    let base = word1;
    let nextWord = 
}