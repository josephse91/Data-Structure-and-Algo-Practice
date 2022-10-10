/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let letters = board.length * board[0].length;
    if (word.length > letters) return false;
    let visited = new Set();
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let match = explore(word,i,j);
            if (match) return true;
            visited = new Set();
        }
    }
    
    function explore(word,i = 0,j = 0,path = new Set()) {
        let pos = i + "_" + j
        if (!word.length) return true;
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return;

        if (board[i][j] !== word[0]) return false;
        if (path.has(pos)) return false;
        
        path.add(pos);
        let newWord = word.slice(1)
        
        let navi = [[0,1],[0,-1],[1,0],[-1,0]];
        let boolean = [];
        
        navi.forEach(([x,y]) => {
            let row = x + i;
            let col = y + j;
            let newPos = row + "_" + col;
            boolean.push(explore(newWord,row,col,path))
        })
        
        path.delete(pos)
        return boolean.some(path => !!path)
    }
    
    return false;
};

// function validNeighbors(board,i,j) {
//     let neighbors = [];
//     for (let x = i-1; x<= i+1; x++) {
//         for (let y = j-1; y <= j+1; y++) {
//             x >= 0 && y >= 0 && !(x === i && y ===j) && board[x][y] ? neighbors.push(board[x][y]) : null;
//         }
//     }
//     return neighbors;
// }



