function treeSum(root) {
    if (!root) return 0;

    let sum = 0;

    let node = root.val;
    let leftSide = treeSum(root.left);
    let rightSide = treeSum(root.right);

    sum = leftSide + node + rightSide;
    return sum;

    // if (!root) return 0;
    // let stack = [root];
    // let sum = 0

    // while(stack.length) {
    //     let node = stack.pop();

    //     sum += node.val;

    //     if (node.right) stack.push(node.right);
    //     if (node.left) stack.push(node.left);
    // }
    // return sum;

}


module.exports = {
    treeSum
};