/* https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/ */

/* SLIDING WINDOW ATTEMPT
    The patterns that we realize with these problems are that:
    - If the array is 4 elements or less, we can change up to 3 elements to an existing element value. This would make the range 0
    - If the array is 5 elements or more, after changing (aka nullifying) 3 elements, we need to get the smallest range. In this case, we need to nullify the combination of elements from the minimum and maximum of the array so that 3 values are nullified. Afterwhich, we will find the range of the remaining values.
    If the range is smaller that the currently recorded range, we will replace it with the current range.
*/
var minDifference = function (nums) {
    if (nums.length < 5) return 0;

    let range = Infinity;
    let sortedNums = nums.sort((a, b) => a - b);
    let lastIdx = nums.length - 1;
    let currentRange;

    for (let i = 0; i <= 3; i++) {
        let newMin = sortedNums[3 - i];
        let newMax = sortedNums[lastIdx - i];

        currentRange = newMax - newMin;
        if (currentRange < range) {
            range = currentRange;
        }
    }
    return range;
};

nums1 = [5, 3, 2, 4];
// console.log(minDifference(nums1));

nums2 = [1, 5, 0, 10, 14];
// console.log(minDifference(nums2));

nums3 = [6, 6, 0, 1, 1, 4, 6];
console.log(minDifference(nums3));

nums4 = [82, 81, 95, 75, 20];
console.log(minDifference(nums4));

/*
var minDifferenceTry2 = function (nums) {
    let array = Array.from(nums);
    let sortedNum = quickSort(array);
    let lastIdx = nums.length - 1;
    let difference = [];

    console.log(sortedNum);
    if (nums.length >= 5) {
        for (let moves = 0; moves < 3; moves++) {
            let frontDiff = sortedNum[3] - sortedNum[moves];
            let backDiff = sortedNum[lastIdx - moves] - sortedNum[lastIdx - 3];

            difference.push([frontDiff, moves], [backDiff, lastIdx - moves]);
            // console.log(frontDiff,backDiff)
        }
        ranges = difference.map((el) => el[0]);
        sortedRanges = quickSort(ranges);

        sortedDiff = sortedRanges.map((el) => el);

        console.log(difference);
        console.log(sortedRanges);

        for (let i = 0; i <= 2; i++) {
            let idx = difference[i][1];
            console.log(idx);
            if (sortedRanges[2] <= difference[i][0]) {
                sortedNum[idx] = sortedNum[3];
            } else {
                sortedNum[idx] = sortedNum[lastIdx - 3];
            }
        }
        console.log(sortedNum);
        return Math.max(...sortedNum) - Math.min(...sortedNum);
    } else {
        return 0;
    }
};

function quickSort(array) {
    if (!array.length) return [];

    let pivot = array.shift();
    let leftSide = array.filter((el) => el <= pivot);
    let rightSide = array.filter((el) => el > pivot);

    return [...quickSort(leftSide), pivot, ...quickSort(rightSide)];
}

// console.log(quickSort([7,3,8,3,5,6]))
*/
/*
var minDifference_try1 = function (nums) {
    let array = Array.from(nums);
    let min = Math.min(...array);

    for (let n = 1; n <= 3; n++) {
        if (!(array[n] === undefined)) {
            let max = min;
            let idx;
            for (let i = 0; i < array.length; i++) {
                if (array[i] > max) {
                    max = array[i];
                    idx = i;
                }
            }
            array[idx] = min;
        }
        console.log(array);
    }

    let finalMax = Math.max(...array);
    return (diff = finalMax - min);
};
*/
