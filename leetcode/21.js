// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

function mergeTwoLists(list1,list2) {
    // if (list1 && list2 === []) return []
    // if (list1.length < 1) return list2[0]
    // if (list2.length < 1) return list1[0]

    // let merge = []
    // if (list1[0] >= list2[0]) {
    //     merge.push(list1[0]);
    //     mergeTwoLists(list1.slice(1),list2);
    // } 
    // if (list2[0] > list1[0]) {
    //     merge.push(list2[0]);
    //     mergeTwoLists(list1,list2.slice(1));
    // }
    // return merge
    let listRight = [...list1];
    let listLeft = [...list2];
    let mergeList = []
    
    while (Math.max(listLeft.length,listRight.length) > 0) {
        
        if (listLeft[0] <= listRight[0] || listRight.length === 0) {
            let link = listLeft.shift(0)
            mergeList.push(link)
        } else if (listLeft[0] > listRight[0] || listLeft.length === 0) {
            let link = listRight.shift(0)
            mergeList.push(link)
        }
    }
    return mergeList
}

let list7 = [1,2,4]; 
let list8 = [1,3,4];
console.log(mergeTwoLists(list7,list8)) // => [1,1,2,3,4,4]

let list3 = [], list4 = []
console.log(mergeTwoLists(list3,list4)) // => []


let list5 = [], list6 = [0]
console.log(mergeTwoLists(list5,list6)) // => [0]