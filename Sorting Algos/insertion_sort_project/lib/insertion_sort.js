function insertionSort(arr) {
    // Must iterate from the second element. 
    for(let i = 1; i < arr.length; i++) {
        
        // The nested loop will iterate through the sorted side.
        // Starting with the first element of the unsorted side, it will compare the unsorted element with through the sorted side
        for(let j = i - 1; j >= 0; j--) {
            if (arr[j] >= arr[j+1] ) {
                //whenever the sorted side has a larger value, the two values will be swapped
                // Important to note that we are swapping adjacent elements until the element is sorted
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}

module.exports = {
    insertionSort
};