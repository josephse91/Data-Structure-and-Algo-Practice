/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let index = 0, currSum = 0, minVal = 0;
    
    for (let i = 0; i < gas.length; i++) {
        let fuel = gas[i];
        let pumpCost = cost[i];
        let diff = fuel - pumpCost
        
        currSum += diff;
        minVal = Math.min(currSum, minVal);
        
        if (currSum < 0 && currSum === minVal) {
            index = i + 1
        }
    }
    
    return currSum >= 0 ? index : -1;
};

/* Since this is a circular route, the sum of the elements must be greater zero or greater 
*/