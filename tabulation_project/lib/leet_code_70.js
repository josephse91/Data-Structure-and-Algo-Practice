// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

function climbStairsRecursion(n,memo = {}) {
    // Recursive first.
    // Base case would be when there are no more steps lefts
    // We must also keep in mind that the amount of steps cannot be less than 0 so in those cases, we'll return 0 since it is not a valid step
    if (n === 0) return 1;
    if (n < 0) return 0;

    // Because so many of the nodes are recurring, it would be beneficial memoize the function
    if (n in memo) return memo[n];

    // This is the recursive formula
    memo[n] = climbStairsRecursion(n-2, memo) + climbStairsRecursion(n-1, memo);
    return memo[n]
}

//Tabulation Method
function climbStairs(n) {
    let table = new Array(n + 1);
    table[0] = 1;
    table[1] = 1;

    for (let i = 2; i < table.length; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }

    return table[table.length - 1];
}