/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    let foundPQ = new Set();
    
    function dfs(root) {
        if (!root) return root;
    
        let left = dfs(root.left,p,q);
        let right = dfs(root.right,p,q);
        
        if (root === p || root === q) {
            foundPQ.add(root.val);
            return root;
        }
        
        return left && right ? root : (left || right);
    }
    
    let commonRoot = dfs(root)
    return foundPQ.size > 1 ? commonRoot : null;
    
};