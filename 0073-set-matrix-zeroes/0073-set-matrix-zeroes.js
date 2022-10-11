/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let queue = [];
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length;j++) {
            if (!matrix[i][j]) queue.push([i,j])
        }
    }
    
    queue.forEach(([x,y]) => {
        if (!matrix[x][y]) {
            for (let i = 0; i < matrix.length; i++) {
                fillZeros(x,y);
            }
        }
    })
    
    function fillZeros(row,col) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][col] = 0;
        }
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[row][j] = 0;
        }
    }
};