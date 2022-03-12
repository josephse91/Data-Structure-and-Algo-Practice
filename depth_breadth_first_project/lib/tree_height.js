function treeHeight(root) {
    if (!root) return -1;
    
    let count = 0;
    let childCount = Math.max(treeHeight(root.left), treeHeight(root.right))
    count++

    return count + childCount;
}


module.exports = {
    treeHeight
};