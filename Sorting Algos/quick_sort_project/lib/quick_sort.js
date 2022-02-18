function quickSort(array) {
    // Establishes the base case of the sorted arrays
    if (array.length === 0 || array.length === 1) return array

    // Declare the pivot which will be the first element. If the data is already sorted, it may be better to make this a random element
    let pivot = array.shift();
    let leftArray = array.filter(ele => ele <= pivot);
    let rightArray = array.filter(ele => ele > pivot);

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}


module.exports = {
    quickSort
};