//https://leetcode.com/problems/find-leaves-of-binary-tree/
/*
var findLeavesIterative = function(root) {
    let array = root;
    let output = [];
    let i = array.length - 1;
    let currentNode

    while (i >= 0) {
        let children = []
        let child = false;
        
        while (!child) {
            
            let leftChild = i * 2 + 1;
            let rightChild = i * 2 + 2;
        
            if ((!array[leftChild] && !array[rightChild])) {
                currentNode = array[i];
                children.push(currentNode);
                i -= 1;
            } else {
                output.push(children);
                child = true;
            }    
        }
        array = array.slice(0,i+1)
    }
    return output;
}

root1 = [1,2,3,4,5]
// Output: [[4,5,3],[2],[1]]
console.log(findLeavesIterative(root1));

root2 = [1]
// Output: [[1]]
console.log(findLeavesIterative(root2));

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


*/
// ************************************************************

/*
var findLeaves = function(root) {
    let array = Array.from(root);
    let tree = buildTree(array);
    let output = [dfs(tree)];

    let visited = output[0];
    let unvisited = array;

    let newTree;
    let newOutput;

    while(visited.length < array.length) {
        unvisited = array.filter(el => !visited.includes(el))
        
        newTree = buildTree(unvisited)
        newOutput = dfs(newTree)
        output.push(newOutput)
        visited = visited.concat(...newOutput)
    }

    return output
}

function buildTree(array) {
    let ary = Array.from(array);
    let rootNode = ary.shift()
    let root = new TreeNode(rootNode);

    let queue = [root]
    let currentNode = queue.shift()
    
    while (ary.length) {
        let pendingChild = new TreeNode(ary.shift())
        
        if (!(currentNode.left)) {
            currentNode.left = pendingChild;
            queue.push(currentNode.left)
        } else {
            currentNode.right = pendingChild
            queue.push(currentNode.right)
        }
        
        if (currentNode.left && currentNode.right) {
            currentNode = queue.shift()
        }
    }
    return root;
}

function dfs(root, output = []) {
    if (!root) return null;
    if (!root.left && !root.right) {
        output.push(root.val);
    }

    dfs(root.left, output);
    dfs(root.right,output);

    return output;
}

// console.log(findLeaves(root1));
// console.log(dfs(buildTree([1,2,3,4,5])))
*/
// **********************************************************
function buildTree(array) {
    let ary = Array.from(array);
    let rootNode = ary.shift()
    let root = new TreeNode(rootNode);

    let queue = [root]
    let currentNode = queue.shift()
    
    while (ary.length) {
        let pendingChild = new TreeNode(ary.shift())
        
        if (!(currentNode.left)) {
            currentNode.left = pendingChild;
            queue.push(currentNode.left)
        } else {
            currentNode.right = pendingChild
            queue.push(currentNode.right)
        }
        
        if (currentNode.left && currentNode.right) {
            currentNode = queue.shift()
        }
    }
    return root;
}



function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


var findLeaves = function(root) {
    if (!root) return null

    let output = [];
    let visited = {};

    [output,visited] = dfs(root,output,visited);
    output = [output]
    // console.log(output)
// /*
    while (!(root.val in visited)) {
        // output = [...output,...newOutput]

        [newOutput,visited] = dfs(root,[],visited);
        // output = [newOutput]
        output.push(newOutput);
        // console.log(newOutput);
    }
//  */
    return output;
}

function dfs(root, output = [], visited = {}) {
    if (!root || visited[root.val]) return null;
    if (!root.left && !root.right || visited[root.left.val] && visited[root.right.val]) {
        visited[root.val] = root;
        output.push(root.val);
    }

    dfs(root.left, output,visited);
    dfs(root.right,output,visited);

    return [output, visited];
}

root1 = [1,2,3,4,5]
// Output: [[4,5,3],[2],[1]]
console.log(findLeaves(buildTree(root1)));


// console.log(dfs(buildTree(root1),[4,5,3], {4:true,5:true,3:true}))


root2 = [1]
// Output: [[1]]
// console.log(findLeaves(root2));

// [output,visited] = dfs((buildTree([1,2,3,4,5])))

// console.log(output)