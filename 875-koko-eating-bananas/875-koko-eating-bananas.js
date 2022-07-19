/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

// This problem involved taking all of the possibilities of k and using binary search to navigate closer to the answer.
// This method would work for any list of numbers in sequence

function minEatingSpeed(piles, h) {
    
    let l = 0;
    let r = Math.max.apply(Math, piles);
    
    if (piles.length === h) {
        return r;
    }
    
    while (l < r) {
        const m = Math.floor((l + r) / 2);
        let hours = 0;
        for (const pile of piles) {
            hours += Math.ceil(pile / m);
        }
        if (hours > h) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    
    return l;
}


/* My attempt
var minEatingSpeed = function(piles, h) {
    if (piles.length <= 1) return Math.ceil(piles[0] / h)
    // let k = []
    let maxNum = Math.max(...piles)
    
    // for (let i = 1; i <= maxNum; i++) {
    //     k.push(i);
    // }
    
    if (h === piles.length) return maxNum
    
    let left = 1;
    let right = maxNum // k.length - 1;
    let mid
    
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        let hours = bananas(mid,piles)
        
        if (hours > h) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return mid;
};

function bananas(k,piles) {
    let hours = 0;
    for (let i = 0; i < piles.length; i++) {
        hours += Math.ceil(piles[i] / k);
    }
    return hours;
}

*/