// https://leetcode.com/problems/valid-parentheses/

/* USING A STACK
    Iterate through the string. Push any open sign into the stack. Once a close sign appears, remove the last element from the stack. If it is not the appropriate sign, then the operation is inValid. If the stack is eventually cleared then it is valid.
    
    Use an object to associate the open sign with the close sign to make DRY code
*/

var isValid = function (s) {
    let signs = [];
    let chars = s.split("");

    for (let i = 0; i < chars.length; i++) {
        let open = ["(", "[", "{"];

        if (open.includes(chars[i])) {
            signs.push(chars[i]);
            console.log(signs);
        } else {
            let lastIdx = signs.length - 1;
            if (chars[i] === ")") {
                if (signs[lastIdx] === "(") signs.pop();
            }
            if (chars[i] === "]") {
                if (signs[lastIdx] === "[") signs.pop();
            }
            if (chars[i] === "}") {
                if (signs[lastIdx] === "{") signs.pop();
            }

            // console.log(lastIdx, signs);
            if (signs.length - 1 === lastIdx) return false;
        }
    }
    if (signs.length) return false;
    return true;
};

// Solution
var isValidSolution = function (s) {
    const left = [];
    const legend = {
        "(": ")",
        "{": "}",
        "[": "]",
    };
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            left.push(s[i]);
        } else if (legend[left.pop()] !== s[i]) {
            return false;
        }
    }
    return left.length ? 0 : 1;
};

s1 = "()";
s2 = "()[]{}";
s3 = "(]";

console.log(isValid(s1));
console.log(isValid(s2));
console.log(isValid(s3));
