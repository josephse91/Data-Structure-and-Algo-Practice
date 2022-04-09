/* ATTEMPT 1 
    Use the helper function to find the last link in a linked list. I initiated an empty linked list and added the lesser of the initial links of the two lists.

    Output: Success - O(n^2)
    This works under the constraints but by iterating across the final linked list n times, this is n^2 time complexity
*/

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

rNode4 = new ListNode(4);
rNode2 = new ListNode(2, rNode4);
rNode1 = new ListNode(1, rNode2);
pNode3 = new ListNode(3);
pNode2 = new ListNode(2, pNode3);
pNode1 = new ListNode(1, pNode2);
// console.log("red Nodes:", rNode1, "Purple Nodes:", pNode1);

function mergeTwoLists(list1, list2) {
    let mergeNode = new ListNode(0);
    let firstList = list1;
    let secondList = list2;

    while (firstList || secondList) {
        leafNode = lastChild(mergeNode);

        if (firstList && secondList) {
            if (firstList.val <= secondList.val) {
                leafNode.next = new ListNode(firstList.val);
                firstList = firstList.next;
            } else {
                leafNode.next = new ListNode(secondList.val);
                secondList = secondList.next;
            }
        } else {
            if (firstList) {
                leafNode.next = new ListNode(firstList.val);
                firstList = firstList.next;
            } else {
                leafNode.next = new ListNode(secondList.val);
                secondList = secondList.next;
            }
        }
    }
    return mergeNode.next;
}

function lastChild(node) {
    while (node.next) {
        node = node.next;
    }
    return node;
}

// console.log(lastChild(rNode1));
console.log(mergeTwoLists(rNode1, pNode1));

function mergeTwoListsHM(list1, list2) {
    let mergeNode = new ListNode(0);
    let firstList = list1;
    let secondList = list2;

    let visitedNodes = {};
    let lastNode = null;

    if (list1.val <= list2.val) {
        val1 = firstList.val;
        visitedNodes[val1] = firstList;
        lastNode = val1;
    }
}

console.log(mergeTwoListsHP(rNode1, pNode1));
