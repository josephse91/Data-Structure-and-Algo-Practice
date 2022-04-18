// https://leetcode.com/problems/delete-nodes-and-return-forest/

//   Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var delNodes = function (root, to_delete) {
  // If there is no original root, we will return an empty array
  if (!root) return [];

  // we need to set counted roots to an empty array
  let res = [];

  // We need a recursive function that will use a depth first search to analyze whether the node and/or its children need to be deleted
  // Conceptually, for any node that is deleted, its children will become roots. (even if it is a sole node)

  let traverse = (node, isRoot) => {
    // This initiates the base case for the DFS
    if (!node) return;

    // This checks if the node needs to be deleted. Return boolean
    let isNodeDeleted = to_delete.includes(node.val);

    // If the left or right child exists, we want to travel down to it.
    // Sticking with the concept, when traversing to the child node, that node will be noted at a root
    if (node.left) node.left = traverse(node.left, isNodeDeleted);
    if (node.right) node.right = traverse(node.right, isNodeDeleted);

    // If the node is a root AND the node itself isn't being deleted, push it into the roots array
    if (isRoot && !isNodeDeleted) res.push(node);

    // This returns the node is it has not been deleted. It works because it goes from the bottom up.
    return isNodeDeleted ? null : node;
  };
  traverse(root, true);
  return res;
};

node4 = new TreeNode(4);
node5 = new TreeNode(5);
node6 = new TreeNode(6);
node7 = new TreeNode(7);
node2 = new TreeNode(2, node4, node5);
node3 = new TreeNode(3, node6, node7);
node1 = new TreeNode(1, node2, node3);

deletedArray = [2];

console.log(delNodes(node1, deletedArray));
// console.log(dfsDelete(node1, deletedArray))
