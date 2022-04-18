// https://leetcode.com/problems/longest-string-chain/

/* MEMOIZATION SOLUTION 
    Concept: First, because there will always be a sequence of words that either have the same length or increase in length, we want to sort the array by the length. After sorting, we will be able to go element by element.

    At each element, we're going to want to evaluate how many predecessor that the string has. If a string has only one letter, it can thus only have one predecessor, itself. In which case, log this value within a hash/object.

    At the next element, we know that the number of letters is either the same or it added just one letter. Knowing this, we can iterate through the string and temporarily remove the letter. If the remaining string is already a key in the hash/object, we're going to add that hash/object value to this current predecessor. We will eventually make the key of this string the max after iterating through all letters.

    The answer will be the maximum of the values within the hash/object
*/

var longestStrChain = function (words) {
    let sortedWords = words.sort((a, b) => a.length - b.length);

    let resultMap = {};
    sortedWords.forEach(function (word) {
        // Must iterate through each letter of the word. Temporarily evaluate the word without that letter. If that word without the character exist in the map, at that value + 1

        let preVal = 0;
        for (let i = 0; i < word.length; i++) {
            let preWord = word.slice(0, i) + word.slice(i + 1);

            if (resultMap[preWord]) {
                preVal = Math.max(preVal, resultMap[preWord]);
            }
        }
        resultMap[word] = preVal + 1;
    });

    let predecessorValues = Object.values(resultMap);
    return (largestValues = Math.max(...predecessorValues));
};

console.log(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"])); // Output: 4
console.log(longestStrChain(["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"])); // Output: 5
console.log(longestStrChain(["abcd", "dbqca"])); // Output: 1
