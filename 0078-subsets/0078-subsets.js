/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let output = [];
    
    function search(index, subset = []) {
        if (index >= nums.length) {
            output.push([...subset]);
            return
        }
        
        let num = nums[index];
        search(index + 1, [...subset]);
        subset.push(num)
        search(index + 1, [...subset]);
    }
    
    search(0, []);
    return output;
};



