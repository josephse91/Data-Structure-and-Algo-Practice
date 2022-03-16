// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    if (array.length <= 2) return true;
    
    for (let i = 2; i < array.length; i++) {
        let parent = i % 2 === 0 ? Math.floor(i / 2) : Math.floor(i / 2);
        if (array[i] > array[parent]) return false
    }
    
    return true;
}


module.exports = {
    isMaxHeap
};