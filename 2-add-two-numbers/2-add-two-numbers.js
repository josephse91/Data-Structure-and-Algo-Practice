/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let output = new ListNode();
    
    let currNode = output;
    let remainder = 0;
    
    while (l1 || l2) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let sum = val1 + val2 + remainder;
        
        if (sum > 9) {
            sum -= 10;
            remainder = 1;
        } else {
            remainder = 0;
        }
        let newNode = new ListNode(sum)
        currNode.next = newNode
        
        l1 = l1.next ? l1.next : 0;
        l2 = l2.next ? l2.next : 0;
        currNode = currNode.next;
    }
    if (remainder) {
        let newNode = new ListNode(remainder)
        currNode.next = newNode
    }
    return output.next;
};

/*
Need to keep track of the remainder of each node
If there is a remainder after the last node, create extra node with remainder
*/