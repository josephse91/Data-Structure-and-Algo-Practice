/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    let start = [];
    let end = [];
    
    intervals.sort((a,b) => a[0] - b[0]);
    
    for (let [begin,close] of intervals) {
        start.push(begin);
        end.push(close);
    }
    
    for (let i = 0; i < start.length - 1; i++) {
        if (start[i + 1] < end[i]) return false;
    }
    return true;
};