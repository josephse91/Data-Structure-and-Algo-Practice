// https://leetcode.com/problems/find-leaves-of-binary-tree/

/* DFS My DFS solution
    Use the postOrder Depth first search to navigate through each node in the tree. Once a node is visited, I will evaluate if the node is a leaf. If it is a leaf OR both of its children have been visited, push the node into an array that is memoized as visited and pushed into an output argument/

    This DFS function will be looped until all nodes are visited and the outputs have been logged accordingly.

    SLIGHT ADJUSTMENT TO SOLUTION

    A solution found used the DFS to navigate through the nodes but if it was a leaf node, it was get pushed to a memoized array but then the visited node would return 'null'. This is how we would know that the node was already visited.
*/
// **********************************************************
function buildTree(array) {
    let ary = Array.from(array);
    let rootNode = ary.shift();
    let root = new TreeNode(rootNode);

    let queue = [root];
    let currentNode = queue.shift();

    while (ary.length) {
        let pendingChild = new TreeNode(ary.shift());

        if (!currentNode.left) {
            currentNode.left = pendingChild;
            queue.push(currentNode.left);
        } else {
            currentNode.right = pendingChild;
            queue.push(currentNode.right);
        }

        if (currentNode.left && currentNode.right) {
            currentNode = queue.shift();
        }
    }
    return root;
}

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

// /*
var findLeaves = function (root) {
    if (!root) return null;

    let output = [];
    let visited = {};

    [output, visited] = dfs(root, output, visited);
    output = [output];

    while (!(root.val in visited)) {
        [newOutput, visited] = dfs(root, [], visited);
        output.push(newOutput);
    }

    return output;
};

function dfs(root, output = [], visited = {}) {
    if (!root || visited[root.val]) return null;
    if ((!root.left && !root.right) || (visited[root.left.val] && visited[root.right.val])) {
        visited[root.val] = root;
        output.push(root.val);
    }

    dfs(root.left, output, visited);
    dfs(root.right, output, visited);

    return [output, visited];
}

// */

root1 = [1, 2, 3, 4, 5];
// Output: [[4,5,3],[2],[1]]
console.log(findLeaves(buildTree(root1)));

// console.log(dfs(buildTree(root1),[4,5,3], {4:true,5:true,3:true}))

root2 = [1];
// Output: [[1]]
// console.log(findLeaves(root2));

// [output,visited] = dfs((buildTree([1,2,3,4,5])))

// console.log(output)
