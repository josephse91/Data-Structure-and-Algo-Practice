// https://leetcode.com/problems/count-square-submatrices-with-all-ones/

var countSquares = function(matrix, i = 0) {
    // Must find the dimensions of the the x-axis and y-axis of the 2D array
    let xSize = matrix.length;
    let ySize = matrix[0].length;

    // Initiate the count varible to count each valid instance of
    let count = 0;

    // We will iterate at each element, at which we must check if a valid square exists
    // We will then increase the size of the square with the element being the top left corner of each incremental size until a square is no longer possible

    for (let i = 0; i < xSize; i++) {
        for (let j = 0; j < ySize; j++) {
            // minSize is provides the maximum square dimension possible at each element
            let minSize = Math.min(xSize - i, ySize - j)
            
            for (let size = 1; size <= minSize; size++) {
                // The checkSquare function checks if all values within each square contains all 1s.
                count += checkSquare(matrix,size,i,j)
            }
        }
    }
    return count;
};

function checkSquare(matrix,size,initX,initY) {
    for (let i = initX; i < initX + size; i++) {
        for (let j = initY; j < initY + size; j++) {
            if (!(matrix[i][j] === 1)) return 0
        }
    }
    return 1
}

arr1 = [
    [0,1,1,1],
    [1,1,1,1],
    [0,1,1,1]
];

arr2 = [
    [1,0,1],
    [1,1,0],
    [1,1,0]
];

console.log(countSquares(arr1))
console.log(countSquares(arr2))

/*
********| SOLUTION |*******************************
*/

var countSquares = function(matrix) {
    let count = 0;
    for (let i = 0; i < matrix.length; ++i) {
      for (let j = 0; j < matrix[0].length; ++j) {
        if (matrix[i][j] === 0) continue;
        if (i > 0 && j > 0) {
          matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]);
        }
        count += matrix[i][j];
      }
    }
    return count; 
  };
