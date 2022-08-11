/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let numCounts = {};
    let count = Array.from(nums, () => [])
    count.push([]);
    let output = [];
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        numCounts[num] ? numCounts[num]++ : numCounts[num]=1;
    }
    
    for (let num in numCounts) {
        count[numCounts[num]].push(Number(num))
    }
    
    for (let j = count.length - 1; j >= 0; j--) {
        console.log(count[j],j)
        if (count[j].length) output.push(...count[j])
        if (output.length >= k) return output;
    }

};
