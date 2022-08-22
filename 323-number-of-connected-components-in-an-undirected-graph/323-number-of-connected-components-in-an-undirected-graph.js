/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    let nodes = {};
    let visit = new Set();
    let output = 0;
    
    function GraphNode(val) {
        this.val = val;
        this.neighbors = [];
    }
    
    for (let i = 0; i < n; i++) {
        let newNode = new GraphNode(i)
        nodes[i] = newNode;
    }
    
    for (let j = 0; j < edges.length; j++) {
        nodes[edges[j][0]].neighbors.push(nodes[edges[j][1]])
        nodes[edges[j][1]].neighbors.push(nodes[edges[j][0]])
    }
    
    for (let x = 0; x < n; x++) {
        let currNode = nodes[x];
        if (visit.has(currNode.val)) continue;
        
        let graph = dfs(currNode);
        output += graph;
    }
    
    function dfs(node) {
        if (visit.has(node.val)) return 1;
        if (!node.neighbors.length) return 1
        
        visit.add(node.val)
        let trees = node.neighbors.map(neighbor => dfs(neighbor))
        
        return Math.max(...trees) 
    }
    return output;
};