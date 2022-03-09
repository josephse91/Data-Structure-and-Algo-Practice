// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if (!this.length) {
            this.bottom = node;
        }

        let prevTop = this.top;
        this.top = node;
        this.top.next = prevTop;
        this.length++;

        return this.length;
    }

    pop() {
        if (!this.length) return null;

        let removedNode = this.top;
        let newTop = this.top.next;

        if (this.length > 1) {
            this.top = newTop;
        } else {
            this.top = null;
            this.bottom = null;
        }

        this.length--;
        return removedNode.value;
    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Stack = Stack;
