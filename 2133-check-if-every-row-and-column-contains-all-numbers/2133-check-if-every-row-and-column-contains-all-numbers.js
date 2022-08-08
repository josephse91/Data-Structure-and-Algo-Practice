/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const checkValid = (matrix) => {
    const rows = new Set(), cols = new Set();
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            rows.add(matrix[i][j]);
            cols.add(matrix[j][i]);
        }
        
        if (matrix.length !== rows.size || matrix.length !== cols.size) 
            return false;
        
        rows.clear();
        cols.clear();
    }
    
    return true;
};