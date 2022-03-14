// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function isBalanced(root) {
    if (root === null) return 0;
    if (root.left === false || root.right === false) return false
    
    let count = 0;

    let difference = Math.abs(isBalanced(root.left) - isBalanced(root.right))
    if (difference > 1) return false; 
    
    count++
    return count; 
}