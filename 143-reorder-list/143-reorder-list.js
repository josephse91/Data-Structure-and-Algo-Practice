/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let prev = null;
    let currNode = slow;
    
    while (currNode) {
        let next = currNode.next;
        currNode.next = prev;
        prev = currNode;
        currNode = next;
    }
    
    let output = new ListNode();
    let list1 = head;
    let list2 = prev;
    
    currNode = output;
    while (list1 !== slow) {
        currNode.next = list1;
        list1 = list1.next;
        currNode = currNode.next;
        
        currNode.next = list2
        list2 = list2.next;
        currNode = currNode.next;
    }
    return output.next;
};