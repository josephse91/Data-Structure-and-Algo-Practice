// Write a function, lucasNumberMemo(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively with memoization.
//
// Examples:
//
// lucasNumberMemo(0)   // => 2
// lucasNumberMemo(1)   // => 1
// lucasNumberMemo(40)  // => 228826127
// lucasNumberMemo(41)  // => 370248451
// lucasNumberMemo(42)  // => 599074578
function lucasNumberMemo(n, memo = {}) {
    if (n === 0) return 2;
    if (n === 1) return 1;
    if (n in memo) return memo[n]

    memo[n] = lucasNumberMemo(n-2, memo) + lucasNumberMemo(n-1, memo);
    return memo[n]
}


// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// After you pass the first 3 examples, you'll likely need to memoize your code 
// in order to pass the 4th example in a decent runtime.
//
// Examples:
//  
// console.log(minChange([1, 2, 5], 11))         // => 3, because 5 + 5 + 1 = 11
// console.log(minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// console.log(minChange([1, 5, 10, 25], 15))    // => 2, because 10 + 5 = 15
// console.log(minChange([1, 5, 10, 25], 100))   // => 4, because 25 + 25 + 25 + 25 = 100

function minChangeAttempt1(coins, amount, memo = {}) {
    //Want to duplicate the coin array so we are not directly manipulating the argument
    let wallet = [...coins];
    // The select coin will always be the largest available coin.
    // This will limit the number of coins to the minimum amount necessary
    let selectCoin = wallet[wallet.length - 1]
    
    // A base case will be when the list of available coins are zero
    // Next base case will be once the amount is equal to the selectCoin meaning we've reached the proper amount of change
    if (coins.length === 0) return {remainder: amount}
    if (selectCoin === amount) return selectCoin

    // Remaining will be the remainder once each selectCoin is subtracted from the amount
    let remaining = amount
    
    //if amount is less than the selectCoin (Largest available coin), we remove the selectCoin from the array since it is invalid for use then run the function again recursively
    if (amount < selectCoin) {
        wallet.pop()
        return minChange(wallet,remaining)
    } else {
        // If amount exceeds selectCoin, subtract selectCoin from amount then concatenate the successful coin choices 
        remaining = amount - selectCoin
        return [selectCoin].concat(minChangeAttempt1(wallet,remaining))
    }    
}

// This previous solution works if appropriate demoninations are available. However, if not, if may not be able to solve the problem
// This next solution exhausts all combinations of coins and find the correct combo of coins that successfully gives change

function minChange(coins, amount, memo = {}) {
    // Once the total amount of change has been given, we will return zero coins back
    if (amount === 0) return 0;
    
    // Because there are redundencies in parts of the tree of options, if the function already has been calculated, it will recall the value from this value bank (memo)
    if (amount in memo) return memo[amount];

    // This will hold the number of coins that are used in each branch of the tree
    let num_coins = []

    // Each coin we will iterate through each coin and subtract from the amount.
    // We will add 1 whenever a coin has been successfully subtracted from the amount.
    coins.forEach(coin => {
        if (coin <= amount) {
            num_coins.push(minChange(coins, amount - coin, memo) + 1);
        }
    });

    memo[amount] = Math.min(...num_coins);
    return memo[amount];
}

module.exports = {
    lucasNumberMemo,
    minChange
};