/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let output = new Array(temperatures.length).fill(0);
    let stack = [[0,temperatures[0]]];
    
    for (let i = 1; i < temperatures.length; i++) {
        let currTemp = temperatures[i];
        let id = [i,currTemp];
        
        if (currTemp > temperatures[i-1]) {
            while (stack.length && stack[stack.length - 1][1] < currTemp) {
                let [prevID,prevTemp] = stack.pop();
                output[prevID] = id[0] - prevID;
            }
        }
        stack.push(id);
    }
    
    return output;
};