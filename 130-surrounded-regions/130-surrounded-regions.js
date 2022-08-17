/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let ROW = board.length, COL = board[0].length;
    let visited = new Set();
    
    
    for (let i = 0; i < ROW; i++) {
        for (let j= 0; j < COL; j++) {
            if (i === 0 || i === ROW - 1 || j === 0 || j === COL - 1) {
                dfs(i,j)
            }
            
            
        }
    }
    
    for (let i = 0; i < ROW; i++) {
        for (let j= 0; j < COL; j++) {
            board[i][j] === "A" ? board[i][j] = "O" : board[i][j] = "X";  
        }
    }
    

    
    function dfs(i,j) {
        if (i < 0 || i >= ROW || j < 0 || j >= COL || board[i][j] === "X") return
        let pos = i + "," + j
        
        if (visited.has(pos)) return
        
        board[i][j] = "A"
        visited.add(pos)
        
        // console.log(board[i][j],visited)
        
        dfs(i-1,j)
        dfs(i+1,j)
        dfs(i,j-1)
        dfs(i,j+1)
    }
    
    return board;
    
};