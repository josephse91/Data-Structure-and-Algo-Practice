// Find the kth largest element within the array

function quickSelect(array, k, leftIdx = 0, rightIdx = array.length - 1) {
    // Base case reflects when the left and right index are the same which means we have reached the kth element
    if (leftIdx === rightIdx) return array[0]

    // NOTE: the kth element will have a (k-1) index. We want to keep this consistent with the index arguments
    let kIdx = k-1

    // The pivot chosen is typically the first element if we have no knowledge of the array. If the array is known to be semi sorted, we can use a random element within the array
    let pivot = array[0];
    let leftArray = array.filter(el => el < pivot)
    let rightArray = array.filter(el => el > pivot)

    let leftsize = leftArray.length
    let rightsize = rightArray.length

    // If the size of the array is added to the left index, it amounts to the index after the final left array index. This is the pivot
    if (leftIdx + leftsize === kIdx) return pivot

    // If the kIdx is less than the pivot, enter the left array, otherwise, enter the right array.
    // When recursively calling quickselect, we want to continue using the same original k since we account for the k index within the function
    
    if (kIdx < leftIdx + leftsize) {
        return quickSelect(leftArray, k, leftIdx, rightIdx - rightsize - 1)
    } else {
        return quickSelect(rightArray, k, leftIdx + leftsize + 1, rightIdx)
    } 
}

let myArray = [4,13,63,35,25,85,243,3,67,35,24] // sorted [3,4,13,24,25,35,35,63,67,85,243]
let kNumber = 4 // => 24

console.log(quickSelect(myArray, kNumber))