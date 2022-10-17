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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false
    let sums = new Set();
    let queue = [root];
    
    
    while (queue.length) {
        let curr = queue.shift();
        
        if (!curr.left && !curr.right && curr.val === targetSum) {
            return true;
        }
        
        if (curr.left) {
            curr.left.val += curr.val
            queue.push(curr.left);
        }

        if (curr.right) {
            curr.right.val += curr.val
            queue.push(curr.right);
        }
    }
    
    return false;
};