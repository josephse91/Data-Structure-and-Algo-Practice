/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let hori = {0:{},1:{},2:{},3:{},4:{},5:{},6:{},7:{},8:{}};
    let vert = {0:{},1:{},2:{},3:{},4:{},5:{},6:{},7:{},8:{}};
    let box = {"00":{},"01":{},"02":{},10:{},11:{},12:{},20:{},21:{},22:{}};
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            let num = board[i][j];
            let x = Math.floor(j/3);
            let y = Math.floor(i/3);
            let square = x.toString() + y.toString();
            
            
            if (num !== ".") {
                if (hori[i][num] >= 0) return false;
                hori[i][num] = j;
                if (vert[j][num] >= 0) return false;
                vert[j][num] = i;
                if (box[square][num] >= 0) return false;
                box[square][num] = j
            }
        }
    }
    return true;
};