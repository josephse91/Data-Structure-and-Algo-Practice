/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let area = 0;
    let visited = new Set();
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            let cell = grid[i][j];
            if (cell && !visited[cell]) {
               let currArea = calcArea(grid,i,j)
               area = Math.max(area,currArea)
                // console.log(i,j,currArea,area,visited)
            }
        }
    }
    
    function calcArea(grid,i,j) {
        let pos = i + "," + j;
        if (visited.has(pos)) return 0;
        let currArea = 0;

        visited.add(pos);
        let dir = [[1,0],[-1,0],[0,1],[0,-1]]

        dir.forEach((d) => {
            let r = i + d[0];
            let c = j + d[1];
            let pos = r + "," + c

            let rowValid = r >= 0 && r < grid.length;
            let colValid = c >=0 && c < grid[0].length;
            let valid = rowValid && colValid;
            // console.log(r,c)
            if (valid && grid[r][c]) {
                currArea += calcArea(grid,r,c)
            }   
        })
        return currArea + 1;
    }
    
    return area;
};

