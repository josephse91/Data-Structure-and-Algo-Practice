/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let start = [];
    let end = [];
    let output = [];
    
    for (let [currStart,currEnd] of intervals) {
        start.push(currStart);
        end.push(currEnd);
    }
    
    for (let i = 1; i <= start.length; i++) {
        if (i < start.length && start[i] <= end[i - 1]) {
            start[i] = Math.min(start[i], start[i-1]);
            end[i] = Math.max(end[i], end[i-1]);
        } else {
            output.push([start[i-1],end[i-1]])
        }
    }
    
    
    
    
    
    return output;
};