/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let signs = new Set(["+","-","*","/"])
    
    for (let i = 0; i < tokens.length; i++) {
        let char = tokens[i];
        stack.push(char);
        
        if (signs.has(char)) {
            let product = eval();
            stack.push(product)
        }
    }
    
    function eval() {
        let sign = stack.pop();
        let num2 = Number(stack.pop());
        let num1 = Number(stack.pop());
        
        switch (sign) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;
            case "/":
                return num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2);
        }
    }
    
    return stack[0];
};