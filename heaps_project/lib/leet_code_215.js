let findKthLargest = function(nums, k) {
    let sortedArray = mergeSort(nums);

    return sortedArray[k-1];

}

function mergeSort(array) {
    if (array.length <= 1) return array;

    let midIdx = Math.floor(array.length / 2);
    let leftArray = array.slice(0,midIdx);
    let rightArray = array.slice(midIdx)


    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(array1,array2) {

    let newArray = []
    while (array1.length > 0 || array2.length > 0) {        
        if (array1[0] >= array2[0] || array2.length === 0) {
            var num = array1.shift(array1[0])
        } else {
            var num = array2.shift(array2[0])
        }

        newArray.push(num);
    }
    return newArray;
}

// console.log(merge([10,6,3],[7,6,4,2]))
// console.log(findKthLargest([3,2,1,5,6,4],2))