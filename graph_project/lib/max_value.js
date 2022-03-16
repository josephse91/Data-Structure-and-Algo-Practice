function maxValue(node, visited=new Set()) {
    // If this specific node has already been visited, it should return a lesser number
    // This functions as a base case because it elimates the recursive step from a node that has already been visited
    if (visited.has(node)) return -Infinity;

    // Add the current node to visited
    visited.add(node);

    // Recursive step should map each max value of neighboring nodes into an array
    let neighborMaxes = node.neighbors.map((neighbor) => maxValue(neighbor, visited));
    
    // Each node should be equal to the selection of maxes between the current and neighbor nodes
    return Math.max(node.val, ...neighborMaxes);
}

module.exports = {
    maxValue
};