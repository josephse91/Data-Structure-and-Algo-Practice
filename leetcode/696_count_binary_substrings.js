// https://leetcode.com/problems/count-binary-substrings/

/* TWO QUOTE SUCCESSFUL ATTEMPT
    The idea is that as we iterate through the binary string, when the value changes, we must assess how many of the current value match the previous value consecutively.

    To do this, once visiting a letter, it is placed in a queue(leftQueue). When the value switches, we place the following values into the right queue. At the next switch we will add the minimum length of the left and right queue to the count. Then we will empty the left queue and make the right queue the left queue now and repeat the process.

    We must lastly account for the very last letters by adding the minimum of the left and right queue stacks.
*/

/* GROUP SOLUTION
    This solution is more effective.

    Iterate through the binary string. Make each group of consecutive numbers a count number within an array.

    Iterate through that count array and add to the result count the minimum between the current and next element.

    This saves on space complexity AND time complexity
*/

var countBinarySubstrings = function (s) {
    let leftQueue = [];
    let rightQueue = [];
    let count = 0;

    let side = -1; // -1 value for left, 1 value for right

    for (let i = 0; i < s.length; i++) {
        let currentSide = s[i] === "0" ? -1 : 1;

        if (currentSide !== side) {
            count += Math.min(leftQueue.length, rightQueue.length);
            leftQueue = rightQueue;
            rightQueue = [];
            rightQueue.push(s[i]);
            side = currentSide;
        } else {
            rightQueue.push(s[i]);
        }
    }
    count += Math.min(leftQueue.length, rightQueue.length);

    return count;
};

var countBinarySubstrings2 = function (s) {
    let count = [];

    let lastIdx = 0;

    for (let idx = 0; idx <= s.length; idx++) {
        if (s[idx] !== s[idx - 1] && idx > 0) {
            lastIdx = count[count.length - 1] ? lastIdx + count[count.length - 1] : lastIdx;
            count.push(idx - lastIdx);
        }
    }

    let sum = 0;
    for (let i = 1; i < count.length; i++) {
        sum += Math.min(count[i], count[i - 1]);
    }

    return sum;
};

input = "00110011"; // Output:6
console.log(countBinarySubstrings(input));

input = "10101"; // Output:4
console.log(countBinarySubstrings(input));

input = "110001111000000"; // Output: 9
console.log(countBinarySubstrings(input));

input = "00110011"; // Output:6
console.log(countBinarySubstrings2(input));

input = "10101"; // Output:4
console.log(countBinarySubstrings2(input));

input = "110001111000000"; // Output: 9
console.log(countBinarySubstrings2(input));
