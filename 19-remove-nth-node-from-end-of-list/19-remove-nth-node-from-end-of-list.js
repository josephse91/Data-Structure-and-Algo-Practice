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
    let nodes = {};
    
    let currNode = head;
    let count = 0;
    while(currNode) {
        nodes[count] = currNode;
        count++;
        currNode = currNode.next;
    }
    
    let idx = count - n;
    
    if (count < 2) return head.next;
    
    if (!nodes[idx - 1]) {
        return head.next;
    } 
    
    if (!nodes[idx + 1]) {
        nodes[idx - 1].next = null;
    } else {
        nodes[idx - 1].next = nodes[idx].next;
    }
    
    
        
    return head
};