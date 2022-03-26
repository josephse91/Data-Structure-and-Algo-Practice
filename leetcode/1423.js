// https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/

function maxScore (cardPoints,k) {
    let totalSum = 0, currentSum = 0
    let frontSum = 0, backSum = 0;
    let deckLength = cardPoints.length - 1
    
    for (let i = 0; i < k; i++) {
        frontSum += cardPoints[i];
    }
    
    if (frontSum > totalSum) {
        totalSum = frontSum;
    }

    let i = 0
    while (frontSum > 0 ) {  
        frontSum -= cardPoints[k-1-i]
        backSum += cardPoints[deckLength - i]
        currentSum = frontSum + backSum;
        // console.log(currentSum,frontSum,backSum)
        // console.log(totalSum)
        totalSum = Math.max(currentSum,totalSum)
        
        i++
    }

    return totalSum;
}

cp1 = [100,40,17,9,73,75];
k1 = 3;
console.log(maxScore(cp1,k1))

cp2 = [1,2,3,4,5,6,1];
k2 = 3;
console.log(maxScore(cp2,k2))