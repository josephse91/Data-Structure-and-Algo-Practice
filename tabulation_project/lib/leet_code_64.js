// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

function minPathSum(grid,x = 0, y=0) {
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