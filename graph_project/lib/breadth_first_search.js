function breadthFirstSearch(startingNode, targetVal) {
    if (!startingNode) return null;

    let queue = [startingNode];
    let visited = new Set();

    while (queue.length) {
        let node = queue.shift();

        if (node.val === targetVal) return node;
        visited.add(node);
        node.neighbors.forEach(neighbor => {
            if (visited.has(neighbor) === false) {
                queue.push(neighbor)
            }
        })
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};