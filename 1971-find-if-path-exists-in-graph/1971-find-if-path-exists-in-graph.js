/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

var validPath = function(n,edges,source,destination){
    if (!edges.length) return true
    let graph = {};
    
    for (let [edge1,edge2] of edges) {
        if (!graph[edge1]) graph[edge1] = new Set();
        if (!graph[edge2]) graph[edge2] = new Set();
        
        graph[edge1].add(edge2);
        graph[edge2].add(edge1);
    }
    
    let curr = source;
    let queue = [curr], visited = new Set();
    
    while(queue.length) {
        curr = queue.shift();
        
        visited.add(curr);
        graph[curr].forEach(neighbors => {
            if (!visited.has(neighbors)) queue.push(neighbors)
        })
    }
    return visited.has(destination)
}

/*
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
*/