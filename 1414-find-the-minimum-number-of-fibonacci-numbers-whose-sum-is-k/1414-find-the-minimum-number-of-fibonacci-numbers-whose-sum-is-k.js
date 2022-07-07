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
    
    /*
    const minFib = function(num,arr) {
        if (num === 0) return 1;
        if (num < 0) return Infinity;
        
        let paths = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > num) continue;
            let nextNum = arr[i];
            paths.push(minFib(num - nextNum,arr))
            // console.log(paths)
        }
        return 1 + Math.min(...paths);
    }
    return (minFib(k,fibNums) -1)
    */
};