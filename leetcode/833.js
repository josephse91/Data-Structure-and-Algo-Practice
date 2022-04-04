// https://leetcode.com/problems/find-and-replace-in-string/

/* There is nothing that says that the indices array will be sorted so I am going to sort the indice, sources and target arrays using bubble sort
Replacing the characters will be done in reverse order to the indexes remain intact

This method will have a time complexity of O(n^2) where n is the number of elements in the indices array
*/

var findReplaceString = function(s, indices, sources, targets) {
    let newStr = s
    let {newIndices,newSources,newTargets} = indexSort(indices, sources, targets)
    
    for (let i = newIndices.length - 1; i >= 0;i--) {
        let idx = newIndices[i]
        let sourceLength = newSources[i].length
        let subString = s.slice(idx,idx + sourceLength)
    
        if (subString === newSources[i]) {
            newStr = s.slice(0,idx) + newTargets[i] + newStr.slice(idx + sourceLength)
        }
    }
    return newStr;

};

function indexSort(indices, sources, targets) {
    let k = indices.length
    let array = [], newIndices = [], newSources = [], newTargets = []
    for (let i = 0; i < k; i++) {
        array.push([indices[i],sources[i],targets[i]])
    }

    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 1; i < array.length; i++) {
            if (array[i][0] < array[i-1][0]) {
                array = swap(array,i,i-1)
                swapped = true;
            }
        }
    }

    for (let i = 0; i < array.length; i++) {
        newIndices.push(array[i][0])
        newSources.push(array[i][1])
        newTargets.push(array[i][2])
    }

    return {newIndices,newSources,newTargets}
}

function swap(array,i,j) {
    let copyArr = Array.from(array);
    [copyArr[j], copyArr[i]] = [copyArr[i],copyArr[j]]
    return copyArr;
}


// console.log(indexSort([3,5,1],["kg","ggq","mo"],["s","so","bfr"]))
// console.log(findReplaceString("abcd",[0,2],["a","cd"],["eee","ffff"]))
// console.log(findReplaceString("abcd", [0,2], ["ab","ec"],["eee","ffff"]))
console.log(findReplaceString("vmokgggqzp",[3,5,1],["kg","ggq","mo"],["s","so","bfr"])) // Output: "vbfrssozp"

/* Solution: There is a better way to do this. We could linearly just navigate through each character in the s argument. If that char starts with the substring, 
then replace the substring with the new target substring
*/

var findReplaceStringSolution = function(S, indexes, sources, targets) {
    const n = indexes.length;
    const chars = S.split("");
   
    for (let i = 0; i < n; i++) {
        const [index, source, target] = [indexes[i], sources[i], targets[i]];
        
        // starts with is a boolean that evaluates if the string at a certain index starts with the source
        if (S.substring(index).startsWith(source)) {
            // if this returns true then 
            replaceChars(chars, index, source, target);
        }
    }
    
    return chars.join("");
    
    
    function replaceChars(chars, start, source, target) {
        // takes the first character of the source array and replaces that with the target
        chars[start] = target;
        
        // replaces the remaining ORIGINAL source string with empty string. NOTE, this person split the string into array elements before hand.
        //They join the elements into a string later. The original strings of the source will be:
        // [replaced] + [""] + [""] ...
        for (let i = 1; i < source.length; i++) {
            chars[start + i] = "";
        }
    }
};

console.log(findReplaceStringSolution("vmokgggqzp",[3,5,1],["kg","ggq","mo"],["s","so","bfr"])) // Output: "vbfrssozp"