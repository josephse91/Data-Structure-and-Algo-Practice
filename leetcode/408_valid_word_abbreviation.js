// https://leetcode.com/problems/valid-word-abbreviation/

/* ITERATION SOLUTION
    The idea of this solution was iterate through each letter of the abbreviation. As the word iterates, there will be a respective "j" index that will be monitored. At each letter of the abbreviation, there will be a small list of options
    1) Is the character a number or a letter?
    - If it is a number:
        -Is the number zero? If so, this number is false.
        If the number is not zero, check if the following two characters are numbers as well. Since the constraint is that the full word cannot be more than 20, there should only be two adjacent numbers maximum. Also, if the adjacent numbers add to greater than 20, this should be false too
        -If it follows the constraints, add the appropriate number to the word index ("j")
    2) If it is a letter:
        -Check if the letters match. If not, return false
        -If they do match, iterate by one for the "j" index
    
    Finally if the index of the word reflects the word length, that means all of the letters have successfully been abbreviated
*/

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
