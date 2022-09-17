/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n,memo = {}) {
    let dp = new Array(n+1).fill(0);
    dp[1] = 1;
    dp[2] = 2
    
    for (let i = 3; i < dp.length;i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[n]
    
};


/*

var climbStairs = function(n,memo = {}) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (memo[n]) return memo[n]
    
    memo[n] = climbStairs(n - 1,memo) + climbStairs(n-2,memo) 
    return memo[n]
};
*/