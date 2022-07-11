/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return root;
    
    let right = root.right ? invertTree(root.right): null;
    let left = root.left ? invertTree(root.left) : null;
    
    root.left = right
    root.right = left
    
    return root;
};