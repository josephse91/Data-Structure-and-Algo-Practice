/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let nodes = {}
    for (let [start,end] of edges) {
        if (nodes[start]) {
           return start;
        } else {
            nodes[start] = 1;
        }
        
        if (nodes[end]) {
            return end;
        } else {
            nodes[end] = 1;
        }
    }
};