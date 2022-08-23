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
 * @return {boolean}
 */
var isBalanced = function(root) {
    return dfs(root) !== -1
    
    function dfs(node) {
        if(!node) return 0;
        
        let rightNode = dfs(node.right)
        let leftNode = dfs(node.left)
        
        if (leftNode === -1 || rightNode === -1 || Math.abs(rightNode - leftNode) > 1) return -1
        
        return 1 + Math.max(rightNode,leftNode);
    }

};