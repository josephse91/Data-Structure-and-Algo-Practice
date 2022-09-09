/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let currNode = null;
    let prev = null;
    
    while (head) {
        currNode = new ListNode(head.val,prev);
        prev = currNode;
        head = head.next;
    }
    return currNode;
};