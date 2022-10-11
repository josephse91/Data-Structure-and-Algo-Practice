/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (!intervals.length) return [newInterval];
    let output = [];
    let originalLength = intervals.length
    
    if (newInterval[0] <= intervals[0][0]) {
      intervals.unshift(newInterval);  
    } else if (newInterval[0] >= intervals[intervals.length - 1][0]) {
        intervals.push(newInterval);
    } else {
        
        for (let j = intervals.length - 1; j >= 0; j--) {
            if (intervals.length <= originalLength) {
                let open = intervals[j][0];
                let close = intervals[j][1];

                if (newInterval[0] >= open) {
                    intervals.splice(j+1,0,newInterval)
                } 
            }
            
        }
    }
    
    // console.log(intervals)

    for (let i = 1; i <= intervals.length; i++) {
        let prevInterval = intervals[i-1]
        if (i === intervals.length) {
           output.push([prevInterval[0],prevInterval[1]]);
            continue;
        }
        let interval = intervals[i];
        
        
        if (interval[0] <= prevInterval[1]) {
            prevInterval[1] = interval[1] = Math.max(prevInterval[1],interval[1])
            interval[0] = Math.min(prevInterval[0], interval[0])
        } else {
            output.push([prevInterval[0],prevInterval[1]]);
        }
    }
    return output;
};