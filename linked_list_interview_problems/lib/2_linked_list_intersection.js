// ============================================================================
// Interview Problem: Linked List Intersection
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Write a function linkedListIntersection that returns the node at which the 
// intersection of two linked lists begins, or null if there is no such 
// intersection.
//
// ---------- 
// Example 1:
// ----------
// 
// Given the following two linked lists, list1 and list2, 
// linkedListIntersection(list1,list2) should return D 
// as the node of intersection.
// 
//    A → B → C
//             ↘
//               D → E → F
//             ↗
//        X → Y
//
// ---------- 
// Example 2:
// ----------
//
// Given the following two linked lists, list1 and list2, 
// linkedListIntersection(list1, list2) should return null 
// as there is no point of intersection.
// 
//    A → B → C → D
//
//    X → Y → Z
// 
// -----------
// Let's code!
// -----------
function linkedListIntersection(list1, list2) {
  // TODO: Implement the hasCycle function!

  /*
  let Nodecounts = {};

  let node1 = list1.head;
  for (let i = 0; i < list1.length; i++) {
    Nodecounts[node1.value] = 1;
    node1 = node1.next;
  }

  let node2 = list2.head;
  for (let j = 0; j < list2.length; j++) {
    if (Nodecounts[node2.value] === 1) {
      return node2;
    } else {
      Nodecounts[node2.value] = 1
      node2 = node2.next;
    }
  }
  return null;
  */

  let start1 = list1.head;
  let path1 = start1.next;
  let start2 = list2.head;
  let path2 = start2.next;

  for (let i = 1; i < list1.length; i++) {
    for (let j = 1; j < list2.length; j++) {
      if (path1 === path2) return path1
      if (path2.next) {
        path2 = path2.next;
      }
    }
    if (path1.next) {
      path1 = path1.next;
    }
  }
  
  return null;

}

// ----------------------------------------
// Given: Singly Linked List - Do Not Edit!
// ----------------------------------------
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

// --------------------------------------
// Helper For Testing Only - Do Not Edit!
// --------------------------------------
var stringify = function(list) {
  var result = [];
  while(list !== null) {
    result.push(list.value);
    list = list.next;
  }
  return result.join("");
}

exports.Node = Node;
exports.LinkedList = LinkedList;
exports.linkedListIntersection = linkedListIntersection;
exports.stringify = stringify;
