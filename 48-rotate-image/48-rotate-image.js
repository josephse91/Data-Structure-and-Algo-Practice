/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let queue = [];
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            queue.push(matrix[i][j]);
        }
    }
    
    for (let c = matrix[0].length - 1; c >= 0; c--) {
        for (let r = 0; r < matrix.length; r++) {
            let num = queue.shift();
            matrix[r][c] = num; 
        }
    }
    
    return matrix;
};