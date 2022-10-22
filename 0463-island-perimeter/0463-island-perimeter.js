/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let visit = new Set();
    let output = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            let pos = i + "," + j
            if (grid[i][j] && !visit.has(pos)) {
                visit.add(pos);
                let neighbors = findNeighbors(grid,i,j);
                output += 4 - neighbors
            }
        }
    }
    
    return output;
};

var findNeighbors = function(grid,i,j) {
    let directions = [[-1,0],[1,0],[0,-1],[0,1]];
    
    let neighbors = [];
    directions.forEach(([hori,vert]) => {
        let row = i+hori, col = j+vert;
        if (row >= 0 && row < grid.length && col >= 0 && col < grid[0].length && grid[row][col]) {
            neighbors.push([i+hori,j+vert])
        }
    })
    
    return neighbors.length
}