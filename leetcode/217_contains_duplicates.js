// https://leetcode.com/problems/contains-duplicate/

/* HASH TABLE SOLUTION
    Create an empty hash table. Iterate through each number. Upon visiting each variable, you need to check if the hash table has the element. If so, return true. 
*/

var containsDuplicate = function (nums) {
    let check = {};

    for (let i = 0; i < nums.length; i++) {
        if (check[nums[i]]) return true;
        check[nums[i]] = true;
    }
    return false;
};
