/**
 * @param {character[][]} grid
 * @return {number}
 */

/* When visiting positions, all you need is a set. This is because, there is no key:value pairs.
When dealing with 2D array where the current element has a relationship with the adjacent or other elements, you must create a system of visiting elements

*/


function explore(grid, r, c, visited) {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;

    if (!rowInbounds || !colInbounds) return false;
    if (grid[r][c] === '0') return false;

    const pos = r + ',' + c;

    if (visited.has(pos)) return false;
    visited.add(pos);

    explore(grid, r - 1, c, visited);
    explore(grid, r + 1, c, visited);
    explore(grid, r, c - 1, visited);
    explore(grid, r, c + 1, visited);

    return true;
}

var numIslands = function (grid) {
    const visited = new Set();
    let count = 0;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (explore(grid, r, c, visited)) {
                count += 1;
            }
        }
    }
    return count;
};