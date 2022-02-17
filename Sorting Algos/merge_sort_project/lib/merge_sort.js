function merge(array1, array2) {

    let sortedArray = []
    while(array1.length || array2.length) {
        if(array1[0] <= array2[0] || array2.length === 0) {
            let num = array1.shift();
            sortedArray.push(num);
        } else {
            let num = array2.shift();
            sortedArray.push(num);
        }
    }
    return sortedArray;
}

function mergeSort(array) {
    if (array.length === 0 || array.length === 1) return array

    let midpoint = Math.floor(array.length / 2)
    let leftArray = array.slice(0,midpoint)
    let rightArray = array.slice(midpoint)

    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

module.exports = {
    merge,
    mergeSort
};