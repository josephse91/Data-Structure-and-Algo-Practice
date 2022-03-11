function inOrderArray(root) {
    if (!root) return [];

    let array = [];

    return [ 
        ...inOrderArray(root.left), 
        root.val, 
        ...inOrderArray(root.right) 
    ];

}

function postOrderArray(root) {
    if (!root) return [];

    let array = [];

    return [
        ...postOrderArray(root.left),
        ...postOrderArray(root.right),
        root.val,
    ];
}


module.exports = {
    inOrderArray,
    postOrderArray
};