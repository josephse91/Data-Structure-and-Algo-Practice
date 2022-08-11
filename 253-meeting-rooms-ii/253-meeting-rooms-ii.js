/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let start = [];
    let finish = [];
    
    let maxCount = 0;
    
    for (let i = 0; i < intervals.length; i++) {
        start.push(intervals[i][0]);
        finish.push(intervals[i][1])
    }
    
    start.sort((a,b) => a-b);
    finish.sort((a,b) => a-b);
    
    let count = 0;
    while (start.length) {
        if (start[0] < finish[0]) {
            start.shift()
            count++
        } else {
            finish.shift()
            count--
        }
        maxCount = Math.max(count,maxCount)
    }
    
    return maxCount
};

/*
As elements are navigated through, we want an additional room requirement to be created if it lands within that range as well.


*/