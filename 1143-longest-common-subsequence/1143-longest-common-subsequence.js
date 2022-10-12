/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let rows = text1.length, cols = text2.length;
    let grid = new Array(rows + 1).fill(0).map(row => new Array(cols + 1).fill(0));
    
    for (let i = rows - 1; i >= 0; i--) {
        for (let j = cols - 1; j >= 0; j--) {
            if (text1[i] === text2[j]) {
                grid[i][j] = 1 + grid[i+1][j+1];
            } else {
                grid[i][j] = Math.max(grid[i+1][j],grid[i][j+1])
            }
        }
    }
    
    return grid[0][0];
};