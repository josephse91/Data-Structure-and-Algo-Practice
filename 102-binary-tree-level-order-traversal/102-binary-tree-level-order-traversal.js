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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let values = [];
    let queue = [root, 0];
    
    let temp = [];
    while (queue.length && root) {
        let node = queue.shift();
        if (!node) break
        
        temp.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
        
        
        if (!queue[0]) {
            let zero = queue.shift();
            values.push(temp);
            temp = [];
            queue.push(zero);
        }
    }
    return values;
};