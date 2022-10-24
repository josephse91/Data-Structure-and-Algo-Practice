/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let output = [[1],[1,1]];
    
    if (numRows < 3) return output.slice(0,numRows)
    
    for (let i = 2; i < numRows; i++) {
        let midElements = [];
        let prev = output[i-1];
        for (let j = 1; j < prev.length; j++) {
            let num = prev[j-1] + prev[j];
            midElements.push(num);
        }
        let arr = [1].concat(midElements).concat(1)
        output.push(arr);
    }
    
    return output;
};