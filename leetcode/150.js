// https://leetcode.com/problems/evaluate-reverse-polish-notation/

var evalRPN = function (tokens) {
    let newTokens;
    let answer;
    while (tokens.length > 1) {
        let last = tokens.length - 1;
        newTokens = operators(tokens, last);
    }
    return tokens[0];
};

function operators(tokens, i) {
    let leftArg = [],
        rightArg = [];

    let num1 = Number(tokens[i - 2]),
        num2 = Number(tokens[i - 1]);

    let calculate = null;
    if (tokens[i] === "+") calculate = num1 + num2;
    if (tokens[i] === "-") calculate = num1 - num2;
    if (tokens[i] === "/") calculate = Math.floor(num1 / num2);
    if (tokens[i] === "*") calculate = num1 * num2;

    let newTokens = [...tokens.slice(0, i - 2), calculate];

    if (isNaN(Number(tokens[i - 1]))) {
        rightArg = operators(tokens.slice(0, i), i - 1);
        leftArg = newTokens;
    }

    if (isNaN(Number(tokens[i - 2]))) {
        leftArg = operators(tokens.slice(0, i - 1), i - 2);
        rightArg = newTokens;
    }
    newtokens = [...leftArg, ...rightArg];
    console.log(leftArg, rightArg, tokens, i, newtokens);
    return newtokens;
}

tokens = ["2", "1", "+", "4", "*"];
console.log(operators(tokens, 4));
// console.log(evalRPN(tokens));
tokens = ["4", "13", "5", "/", "+"];
// console.log(evalRPN(tokens));
tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
// console.log(evalRPN(tokens));
