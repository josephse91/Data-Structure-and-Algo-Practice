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
        // Create a new node
        let addHead = new Node(val);

        // Make the new node next reference the current head. Thus making it the new head in practice
        addHead.next = this.head;
        
        // within the list, official make the new head the new node.
        this.head = addHead;
        
        // If the list doesn't originally have any nodes, then the added node will be the head and the tail.
        if (this.length === 0) {
            this.tail = addHead;
        }

        // increment the length attribute
        this.length++;
        return this
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        // If the list is already empty, there are no nodes to remove, therefor the action is undefined
        if (!this.length) return undefined

        // The following is just a placeholder for the head that will be removed
        let removedHead = this.head;

        // The two scenarios are if the linked list only has 1 node, the tail and head should be reassigned to null since the list will now be empty
        // Otherwise, the list tail will not be influenced so we would just need to reassign the head.
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.head = this.head.next;
        }
        // Decrease the length count
        this.length--;

        // Return the removed node
        return removedHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        // If the list is empty it will definitely not contain the target
        if (!this.length) return false

        // The current will start at the head
        let current = this.head

        // Iterate through each node until the target is found
        while(current) {
            if (current.value === target) return true
            current = current.next;
        }

        // If the target isn't found, return false
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        // Return null if the index is out of bounds
        if (index > this.length - 1 || index < 0) return null

        let current = this.head;

        //Iterate through the nodes until the index is reached
        for (let node = 0; node < index; node++) {
            current = current.next;
        }

        // return the node at the desired index
        return current;
    }

    // TODO: Implement the set method here
    set(index, val) {
        // Return false if the index is out of bounds
        if (index > this.length - 1 || index < 0) return false

        let current = this.head;
        let node = 0;

        // While the current node exists, return true is the node is at the desired index. Otherwise, incremented the node value and the move to the next node.
        while (current) {
            if (node === index) {
                current.value = val;
                return true
            } else {
                current = current.next;
                node++
            }
        }
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index >= this.length) return false;
        let addNode = new Node(val);

        
        let afterNode = this.get(index)

        if (this.length > 1) {
            let preNode = this.get(index - 1);
            preNode.next = addNode;
        } else {
            this.head = addNode;
        }
        
        addNode.next = afterNode;
        this.length++;
        return true
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (!this.head) return undefined;
        if (index >= this.length || index < 0) return undefined;
        if (index === 0) return this.removeHead();
        if (index === this.length - 1) return this.removeTail();
        
        let removedNode = this.get(index);
        let preNode = this.get(index - 1);
        let afterNode = this.get(index + 1);

        preNode.next = afterNode;
        this.length--;
        return removedNode;

    }

    // TODO: Implement the size method here
    size() {
       return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
