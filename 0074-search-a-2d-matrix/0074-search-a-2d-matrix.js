/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/*
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
*/
var searchMatrix = function(matrix,target) {
    let rows = matrix.length, cols = matrix[0].length;
    let left = 0, right = rows - 1;
    
    while (left < right) {
       let rowMid = Math.floor((left + right)/ 2);
       if (target > matrix[rowMid][cols - 1]) {
            left = rowMid + 1;
        } else if (target < matrix[rowMid][0]) {
            right = rowMid - 1;
        } else {
            left = rowMid
            break
        }
    }
    
    let targetArray = matrix[left];
    left = 0, right = cols - 1;
    
    while (left <= right) {
        let colMid = Math.floor((left + right)/ 2);
       if (targetArray[colMid] > target) {
            right = colMid - 1;
        } else if (targetArray[colMid] < target) {
            left = colMid + 1
        } else return true; 
    }
    
    return false; 
}