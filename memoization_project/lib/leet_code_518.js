// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

function coinChangeAttempt1(coins,amount,memo = {}) {
    if (amount === 0) return 1

    let combinations = 0;
    coins.forEach(coin => {
        if (amount >= coin) {
            // combinations++; 
            combinations += coinChangeAttempt1(coins,amount - coin);
        } 
    })

    return combinations;
}

console.log(coinChangeAttempt1([1,2,5],5)) //=> 4
// coinChangeAttempt1([1,2,5],5) // => 4

function change(amount, coins, memo = {}) {
    // When the amount of change is reached, we want to increase the count within the number of combinations
    if (amount === 0) return 1;
    if (coins.length === 0) return 0;

    // I want to make sure when memoizing, we take all components that affect the result. So we need to include both amount and coins
    let key = `${amount}-${coins.join(',')}`;
    if (key in memo) return memo[key];

    // I decided to run the recursive calls by running through all options by each coin. I started at the largest coin.
    let coinVal = coins[coins.length - 1];

    // Total is how we collect the counts from the recursive functions
    let total = 0;
    for (let quanitity = 0; quanitity * coinVal <= amount; quanitity++) {
        // For each quantity of the current coin, we want to iterate through the remaining coins after subtracting the amount by the selected coin * the quantity
        total += change(amount - (quanitity * coinVal), coins.slice(0, -1), memo);
    }

    // saving the total within the memo does so at every recursive call so any redundant calls get replaced with the memo
    memo[key] = total;
    return total;
}

console.log(change(5, [1,2,5])) //=> 4