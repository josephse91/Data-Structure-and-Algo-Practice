// https://leetcode.com/problems/climbing-stairs/

/* RECURSION SOLUTION
    Done with a recursive strategy. Since there are many repeat cases, memoization was needed. 

    REMEMBER TO PLACE THE MEMO IN THE RECURSIVE CALLS!!
*/

var climbStairs = function (n, memo = {}) {
    if (n < 2) return 1;
    if (n in memo) return memo[n];

    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
};

n = 2; //2
console.log(climbStairs(n));
n = 3; //3
console.log(climbStairs(n));
