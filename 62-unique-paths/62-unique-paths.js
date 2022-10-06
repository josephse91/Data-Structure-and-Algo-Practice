/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function(m, n) {
    let grid = new Array(m).fill(0).map(() => new Array(n).fill(1))
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            let left = j - 1 >= 0 && j < n ? grid[i][j-1] : 0;
            let up = i - 1 >= 0 && i < m ? grid[i - 1][j] : 0;
            
            grid[i][j] = (left + up || 1)
        }
    }
    
    return grid[m-1][n-1];
}


/*
var uniquePaths = function(m, n) {
    if (m ===0 && n === 0) return 0
    let path = dfs(0,0);
    
    function dfs(x,y) {
        if (x > m - 1 || y > n - 1) return 0
        if (x === m - 1 && y === n - 1) return 1
        
        return dfs(x+1,y) + dfs(x,y+1)
    }
    
    return path;
};
*/