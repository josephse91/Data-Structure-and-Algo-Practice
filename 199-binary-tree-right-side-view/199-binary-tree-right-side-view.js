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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    let output = [];
    let queue = [root];
    
    while (queue.length) {
        let qSize = queue.length;
        
        for (let i = 0; i < qSize; i++) {
            let node = queue.shift();
            
            if (i === qSize - 1) output.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            
        }
    }
    return output;
};