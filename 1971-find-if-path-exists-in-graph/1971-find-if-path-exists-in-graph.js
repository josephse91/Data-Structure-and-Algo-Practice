/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let bucket = new Array(n).fill(false);
    bucket[source] = true;
    
    let run = 1;
    while (run < 3) {
        for (let i = 0; i < edges.length; i++) {
            let edge1 = edges[i][0];
            let edge2 = edges[i][1];
            
            if (bucket[edge1] || bucket[edge2]) {
                bucket[edge2] = true;
                bucket[edge1] = true;
            }
        }
        run++;
    }
    return bucket[destination]
};