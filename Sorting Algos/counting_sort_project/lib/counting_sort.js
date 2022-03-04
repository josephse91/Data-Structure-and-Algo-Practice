function countingSort(arr, max) {
    if (arr.length <= 1) return arr

    let sortHolder = Array.from({length: max + 1}).fill(0);
    let sortedArray = [];

    for (let i = 0; i <= max; i++) {
        sortHolder[arr[i]]++;
    }

    for (let k = 0; k < sortHolder.length; k++) {
        while (sortHolder[k] > 0) {
            sortedArray.push(k);
            sortHolder[k]--;
        }
    }
    return sortedArray
}


module.exports = {
    countingSort
};