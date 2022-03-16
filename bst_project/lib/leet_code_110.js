// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function isBalanced(root) {
    /*
    if (root === null) return 0;
    if (root.left === false || root.right === false) return false
    
    let count = 0;

    let difference = Math.abs(isBalanced(root.left.val) - isBalanced(root.right.val))
    if (difference > 1) return false; 
    
    count++
    return count;

    */
   // return boolean comparison. If the getHeight function is not equal to -1 return true
    return getHeight(root) !== -1;

    // Must create getHeight function that equates -1 to false, 0 to true and another above equal to true.
    
    function getHeight(root) {
        // If the root does not exist, return zero. Empty nodes don't add to the count
        if(!root) {
            return 0;
        }

        // Grab the count of the left and right side
        let left = getHeight(root.left);
        let right = getHeight(root.right);

        // If any children have show signs of imbalance or the different between the current children are imbalanced, return -1
        // -1 is indicative of imbalance. Carry it all the way to the root.
        if(left == -1 || right == -1 || Math.abs(left - right) > 1) {
            return -1;
        }

        // Output of each node should the maximum path between the left and the right plus 1 for the current node
        return 1 + Math.max(left, right);
    }
}

console.log(isBalanced())