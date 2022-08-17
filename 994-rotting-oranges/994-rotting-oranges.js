/**
 * @param {number[][]} grid
 * @return {number}
 */

var orangesRotting = function (grid) {
    let [ROWS, COLS, time, fresh, q] = [grid.length, grid[0].length, 0, 0, []];
    let dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];

    // count fresh oranges and add rotten oranges to queue
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (grid[i][j] === 1) fresh++;
            if (grid[i][j] === 2) q.push([i, j]);
        }
    }

    while (q.length > 0 && fresh > 0) {
        let qLen = q.length;

        for (let rot = 0; rot < qLen; rot++) {
            let [row, col] = q.shift();

            for (let dir of dirs) {
                let [r, c] = [row + dir[0], col + dir[1]];

                if (
                    r < 0 ||
                    r >= ROWS ||
                    c < 0 ||
                    c >= COLS ||
                    grid[r][c] !== 1
                )
                    continue;

                grid[r][c] = 2;
                fresh--;
                q.push([r, c]);
            }
        }

        time++;
    }

    return fresh > 0 ? -1 : time;
};

// if an orange has no 4-directionally adjacent neighbors, return -1
/*
Because there may be multiple rotten orange, it is important that each rotten orange rot their neighbor oranges within the same timeframe. In order to do this, it is required to make a queue. Each time you take a rotten orange, you place its children in the queue. Everytime you're done iterating through its children, you increment the time.

Also, you will originally navigate through the array to count how many fresh oranges there are. If there are any fresh oranges left at the end, return zero
*/