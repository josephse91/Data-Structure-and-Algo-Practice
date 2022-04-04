// https://leetcode.com/problems/delete-nodes-and-return-forest/

//   Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

var delNodes = function(root, to_delete) {
    if(!root) return [];
    let res = [];
    let traverse = (node, isRoot) => {
        if(!node) return;
        let isNodeDeleted = to_delete.includes(node.val);
        if(node.left) node.left = traverse(node.left, isNodeDeleted);
        if(node.right) node.right = traverse(node.right, isNodeDeleted);
        if(isRoot && !isNodeDeleted) res.push(node);
        return isNodeDeleted ? null : node;
    }
    traverse(root, true);
    return res;
};

node4 = new TreeNode(4);
node5 = new TreeNode(5);
node6 = new TreeNode(6);
node7 = new TreeNode(7);
node2 = new TreeNode(2,node4,node5);
node3 = new TreeNode(3,node6,node7);
node1 = new TreeNode(1,node2,node3);

deletedArray = [2];

console.log(delNodes(node1, deletedArray))
// console.log(dfsDelete(node1, deletedArray))
