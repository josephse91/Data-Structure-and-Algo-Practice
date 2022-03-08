// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        // when initiating a node, the node will have a value and the next value should be undetermined until a function of the linked list declares so
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        // When creating an instance of a linked list, there should be an emply list with the head and the tail of the list being null
        // Since there are no nodes, the length of the list is initially 0
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        // Create a new node with the selected value
        let addedNode = new Node(val);

       // If there are no nodes within the link, there is no head. Thus make the head the new node
        if (!this.head) {
            this.head = addedNode
        } else {
            this.tail.next = addedNode
            // If there is a head, then take the current tail and makes the next attribute reference a new node. This in practice makes the existing tail a non tail 
            // However this only makes a new Node within the node class of the last node
            // We must still add this node to the linked list
        }

        this.tail = addedNode;
        // add length to the linked list. Note that this is an attribute that doesn't require a search
        this.length++
        // Once added, return the list
        return this

    }

    // TODO: Implement the removeTail method here
    removeTail() {
        // If there is no head, that means that we have an empty list therefor return undefined
        if (!this.head) return undefined;
        
        // Must iterate through the linked list starting from the head. 
        let current = this.head;
        let newTail = current;
        // Only while the current node has a following existing node, make the tail the current node
        // This is because the current tail has a null value, so in this case, we want to traverse through the linked list until the last node that has a following node and make that node the new tail (eliminating the link to the previous tail)
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        // Declare the new tail and make the next attribute of the tail null
        this.tail = newTail;
        this.tail.next = null;
        // Subtract the length of the linked list
        this.length--;
        
        // if the linked list initially had only one node, there is no node that has a following existing node. In this case, we need to manually make the head and tail of the current node null 
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        // Return the new tail
        return current;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {

    }

    // TODO: Implement the removeHead method here
    removeHead() {

    }

    // TODO: Implement the contains method here
    contains(target) {

    }

    // TODO: Implement the get method here
    get(index) {

    }

    // TODO: Implement the set method here
    set(index, val) {

    }

    // TODO: Implement the insert method here
    insert(index, val) {

    }

    // TODO: Implement the remove method here
    remove(index) {

    }

    // TODO: Implement the size method here
    size() {

    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
