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
 * @return {number}
 */
var goodNodes = function(root) {
    
    function dfs(root,value) {
        if (!root) return 0;
        
        let count = 0;
        if (root.val >= value) count = 1;
        
        let leftVal = root.left && (root.left.val > value) ? root.left.val : value;
        let rightVal = root.right && (root.right.val > value) ? root.right.val : value;
        
        let left = dfs(root.left,leftVal);
        let right = dfs(root.right,rightVal);
        
        return count + left + right;
    }
    
    return dfs(root,root.val)
};