/**
 * @param {number[][]} edges
 * @return {number}
 */
/*
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
*/
var findCenter = function(edges) {
    let left = edges[0][0], right = edges[0][1];
    return left === edges[1][0] || left === edges[1][1] ? left : right;
};
