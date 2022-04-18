// https://leetcode.com/problems/add-two-numbers/

/* LINKED LIST SOLUTION
    Create a linked list and insert method. 
    We will now iterate through the two linked lists and at each respective node, we will add the values to the sum and the sum will be inserted into a result linked list
*/

/* RECURSIVE SOLUTION
    We will make the base case when the node is null

    The recursive step will be that the next attribute for each node will be the following node. See solution below
*/

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(val) {
        let newNode = new ListNode(val, null);
        if (!this.length) this.head = newNode;

        if (this.length >= 1) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;

        return newNode;
    }
}

var addTwoNumbers = function (l1, l2) {
    let list1 = l1,
        list2 = l2;
    let result = new linkedList();

    let sum = 0;
    let carryPlace = 0;

    while (list1 != null || list2 != null || carryPlace) {
        val1 = list1 ? list1.val : 0;
        val2 = list2 ? list2.val : 0;

        sum = val1 + val2 + carryPlace;
        carryPlace = 0;
        result.insert(sum % 10);

        if (sum > 9) {
            carryPlace = 1;
        }
        list1 = list1 ? list1.next : null;
        list2 = list2 ? list2.next : null;
    }
    return result.head;
};

let nodeA3 = new ListNode(3, null);
let nodeA2 = new ListNode(4, nodeA3);
let nodeA1 = new ListNode(2, nodeA2);
let nodeB3 = new ListNode(4, null);
let nodeB2 = new ListNode(6, nodeB3);
let nodeB1 = new ListNode(5, nodeB2);

console.log(addTwoNumbers(nodeA1, nodeB1));

// RECURSIVE SOLUTION
var addTwoNumbersRecurs = function (l1, l2, carry = 0) {
    if (!l1 && !l2 && carry === 0) {
        return null;
    }

    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;
    let nextL1 = l1 ? l1.next : null;
    let nextL2 = l2 ? l2.next : null;

    let sum = x + y + carry;

    carry = Math.floor(sum / 10);
    sum = sum % 10;

    return new ListNode(sum, addTwoNumbersRecurs(nextL1, nextL2, carry));
};

console.log(addTwoNumbersRecurs(nodeA1, nodeB1));
