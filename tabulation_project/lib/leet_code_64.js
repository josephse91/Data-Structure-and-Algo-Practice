// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

function minPathSum(grid,x = 0, y=0) {
    // When assessing the recursive tree, I found that each node formula would be cost(i,j)=grid[i][j]+min(cost(i+1,j),cost(i,j+1))
    // The base case is the bottom right cell
    // This time complexity is O(2^(m * n)). This is because for every move, we have atmost 2 options
    // Space complexity: O(m+n). Recursion of depth m+n
    
    // If the x or y value of the grid exceed the parameters of the 2D array, return a Max number. This will be so that the recursive call doesn't select this option
    if (x === grid.length || y === grid[0].length) return Number.MAX_VALUE
    // When drawing the tree, the bottom right cell is the base case. Once you reach that base case, we want to return the value at that cell
    if (x === grid.length - 1 && y == grid[0].length - 1) return grid[x][y]

    return grid[x][y] + Math.min(minPathSum(grid,x+1,y), minPathSum(grid,x,y+1))
}

grid1 = [[1,3,1],[1,5,1],[4,2,1]] // Output 7
grid2 = [[1,2,3],[4,5,6]] // Output 12

console.log(minPathSum(grid1))
console.log(minPathSum(grid2))

//Tabulation
// This would be the preferred solution due to the lower complexity
function minPathSum(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let table = new Array(m).fill().map(() => new Array(n).fill(Infinity));
    table[0][0] = grid[0][0];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i < m - 1) {
                table[i + 1][j] = Math.min(table[i][j] + grid[i + 1][j], table[i + 1][j]);
            }
            if (j < n - 1) {
                table[i][j + 1] = Math.min(table[i][j] + grid[i][j + 1], table[i][j + 1]);
            }
        }
    }

    return table[m - 1][n - 1];
}