// https://leetcode.com/problems/valid-word-abbreviation/

var validWordAbbreviation = function (word, abbr) {
    let j = 0;
    abbr = abbr.split("");

    for (let i = 0; i < abbr.length; i++) {
        if (!word[j]) return false;
        let char = abbr[i];
        let charCode = abbr[i].charCodeAt(0);
        let charCodeNext = abbr[i + 1] ? abbr[i + 1].charCodeAt(0) : 100;
        let charCode3Digit = abbr[i + 2] ? abbr[i + 2].charCodeAt(0) : 100;

        if (charCode < 97) {
            if (charCode === 48) {
                return false;
            } else {
                if (charCodeNext < 97) {
                    abbr[i] += abbr[i + 1];
                    abbr[i + 1] = "";
                    if (Number(abbr[i]) > 20) return false;
                    if (charCode3Digit < 97) return false;
                    j += Number(abbr[i]) - 1;
                } else {
                    j += Number(char);
                }
            }
        } else {
            if (abbr[i] != word[j] && abbr[i] != "") return false;
            j++;
        }
    }
    return j === word.length;
};

word = "internationalization";
abbr = "i5a11o1";
console.log(validWordAbbreviation(word, abbr));
word = "apple";
abbr = "a2e";
// console.log(validWordAbbreviation(word, abbr));
word = "a";
abbr = "01";
// console.log(validWordAbbreviation(word, abbr));
word = "aaaaaaaaaaaaaaaaaaa";
abbr = "145";
console.log(validWordAbbreviation(word, abbr));
