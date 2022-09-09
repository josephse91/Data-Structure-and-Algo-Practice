/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let sudoNode = new ListNode(null,head);
    
    let left = sudoNode;
    let right = sudoNode;
    
    for (let i = 1; i <= n; i++) {
        right = right.next;
    }
    
    while (right.next) {
        left = left.next;
        right = right.next;
    }
    
    let replace = left.next.next ? left.next.next : null;
    left.next = replace;
    return sudoNode.next;
};