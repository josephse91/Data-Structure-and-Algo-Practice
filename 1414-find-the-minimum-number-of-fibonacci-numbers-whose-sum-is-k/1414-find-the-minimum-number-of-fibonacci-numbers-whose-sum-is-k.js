/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function(k) {
    if (k === 1) return 1;
    
    fibNums = [1,1];
    
    let nextNum = -Infinity;
    let i= 1;
    while (nextNum < k) {
        nextNum = fibNums[i-1] + fibNums[i]
        if (nextNum <= k) {
            fibNums.unshift(nextNum) 
        }
    }
    
    let n = 0
    let count = 0;
    while (k > 0) {
        if (k < fibNums[n]) {
            n++;    
        } else {
            k -= fibNums[n];
            count++
        }
    }
    return count
    
};

/* Attempt 1
I had tried to attempt this using an exhaustive recursive strategy. This would take the given k and subtract each of the fib values equal to or below the k value and within the recursive tree, find the minimum path.

There were two problems:
1) The process took too much time beyond a trivially normal number like 20
2) The answer I found wasn't correct for each number
    


*/

/* Attempt 2

I had to acknowledge that the pattern of the fibonacci meant that I could subtract the biggest available fib number from k and there will be a divisible under it that will be the most efficient path. This typically is the case with any problem like this that has a 1 within its options or if all of the numbers are divisible within each other
*/