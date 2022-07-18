/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rightEndIdx = matrix[0].length - 1;
    let bottomEndIdx = matrix.length - 1;
    let selectRow = false;
    
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i]
        if (row[rightEndIdx] >= target) {
            selectRow = row
            break;
        }
    }
    
    if (!selectRow || selectRow[0] > target) return false;
    
    let leftIdx = 0;
    let rightIdx = rightEndIdx;
    
    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2)
        
        if (selectRow[midIdx] === target) return true;
        if (selectRow[midIdx] < target) {
            leftIdx = midIdx + 1;
        } else  {
            rightIdx = midIdx - 1;
        }
    }
    
    return false;
};