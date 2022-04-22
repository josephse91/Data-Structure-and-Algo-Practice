// https://leetcode.com/problems/valid-word-abbreviation/

var validWordAbbreviation = function (word, abbr) {
    let j = word.length - 1;
    abbr = abbr.split("");
    for (let i = abbr.length - 1; i >= 0; i--) {
        let char = abbr[i];
        console.log(abbr, i, j, char, word[j], Number(char));
        if (Number(char) >= 0) {
            let num = Number(char);
            if (Number(abbr[i - 1] >= 0 && abbr[i - 1] != 0)) {
                abbr[i - 1] += char;
            } else {
                if (!num) {
                    return false;
                }
                if (!word[j] || j - num < -1) return false;
                j -= num;
            }
        } else {
            if (word[j] === abbr[i]) {
                j--;
            } else {
                return false;
            }
        }
    }
    return true;
};

word = "internationalization";
abbr = "i12iz4n";
console.log(validWordAbbreviation(word, abbr));
word = "apple";
abbr = "a2e";
console.log(validWordAbbreviation(word, abbr));
word = "a";
abbr = "01";
console.log(validWordAbbreviation(word, abbr));
