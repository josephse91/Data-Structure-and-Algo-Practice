/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let visit = new Set();
    let currNode = head;
    
    while(currNode) {
        if (visit.has(currNode)) return true;
        visit.add(currNode);
        currNode = currNode.next;
    }
    
    return false;
};