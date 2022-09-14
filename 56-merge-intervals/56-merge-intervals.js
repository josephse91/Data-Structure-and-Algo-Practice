/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let output = [];
    
    for (let i = 1; i <= intervals.length; i++) { 
        if (i < intervals.length && intervals[i][0] <= intervals[i - 1][1]) {
            intervals[i][0] = Math.min(intervals[i][0], intervals[i-1][0]);
            intervals[i][1] = Math.max(intervals[i][1], intervals[i-1][1]);
        } else {
            output.push([intervals[i-1][0],intervals[i-1][1]])
        }
    }
    
    return output;
};