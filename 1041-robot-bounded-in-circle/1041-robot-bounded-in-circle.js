/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let dir = [[1,0],[0,-1],[-1,0],[0,1]];
    
    let [row,col] = [0,0];
    
    for (let times = 1; times <= 4; times++) {
        for (let i = 0; i < instructions.length; i++) {
            let char = instructions[i];

            if (char === "G") {
                row += dir[0][0];
                col += dir[0][1];  
            } else {
                move(char);
            }
        }
    }
    
    
    return row === 0 && col === 0;
    
    function move(letter) {
        if (letter === "L") {
            let step = dir.pop();
            dir.unshift(step);
        } else if (letter === "R") {
            let step = dir.shift();
            dir.push(step);
        }
        return;
    }
    
};