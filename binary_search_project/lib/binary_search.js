function binarySearch(array, target) {
    if (array.length === 0) return false;

    midIdx = Math.floor(array.length / 2);
    leftArray = array.slice(0,midIdx);
    rightArray = array.slice(midIdx +1);

    if (target < array[midIdx]) {
        return binarySearch(leftArray,target);
    } else if (target > array[midIdx]) {
        return binarySearch(rightArray,target);
    } else {
        return true
    }          
}

function binarySearchIndex(array, target) {
    if (!binarySearch(array)) return -1;

    // There is a way to capture the index within the binary search
    // This would keep the time complex logarithmic. If we used an object as reference. Possibly even keeping the time complexity as constant.
    // However, I am going to use linear since this problem doesn't suggest changing the BinarySearch code AND in good practice, I don't want to rewrite the same function with minor changes
    // I will keep it simple and do this linearly

    return array.findIndex((el) => el === target);
}


module.exports = {
    binarySearch,
    binarySearchIndex
};