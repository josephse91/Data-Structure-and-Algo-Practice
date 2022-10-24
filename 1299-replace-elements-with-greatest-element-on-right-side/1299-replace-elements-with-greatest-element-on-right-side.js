/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let max = -1;
    let output = new Array(arr.length).fill(-1)
    
    for (let i = arr.length - 1; i >=0; i--) {
        output[i] = max;
        max = Math.max(max,arr[i]);  
    }
    return output;
};