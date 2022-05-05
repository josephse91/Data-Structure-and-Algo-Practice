// https://leetcode.com/problems/kth-missing-positive-number/

/*
    Iterate until the number of instances that i doesn't equal the value in the array, k times. 

    Note: increment the array value each time it matches with the i. This problem would be slightly different if there were duplicates allowed
*/
var findKthPositive = function (arr, k) {
    let count = 0;
    let j = 0;

    for (let i = 1; i < Infinity; i++) {
        if (i === arr[j]) {
            j++;
            continue;
        }
        count++;

        if (count === k) return i;
    }
};

arr = [2, 3, 4, 7, 11];
k = 5;
console.log(findKthPositive(arr, k));

arr = [1, 2, 3, 4];
k = 2;
console.log(findKthPositive(arr, k));
