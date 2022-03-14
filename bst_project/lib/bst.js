class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor() {
    this.root = null;
   }

    insert(val, root = this.root) {
        if (!this.root) {
            this.root = new TreeNode(val);
            return;
        };

        let node = new TreeNode(val);

        if (val < root.val) {
            if (root.left) {
                this.insert(val, root.left);
            } else {
                root.left = node;
            }   
        } else {
            if (root.right) {
                this.insert(val, root.right);
            } else {
                root.right = node;
            }
        }
        // return node;
    }

    searchRecur(val, root = this.root) {
        if (!root) return false;

        if (val < root.val) {
            return this.searchRecur(val,root.left);
        } else if (val > root.val) {
            return this.searchRecur(val,root.right);
        } else {
            return true;
        }
    }

    searchIter(val, root = this.root) {
        if (!root) return false;

        let stack = [ root ];

        while (stack.length) {
            let node = stack.shift()

            if (val < node.val) {
                if (node.left) stack.push(node.left)
            } else if (val > node.val) {
                if (node.right) stack.push(node.right)
            } else {
                return true;
            }
        }
        return false;
    }

}

module.exports = {
    TreeNode,
    BST
};