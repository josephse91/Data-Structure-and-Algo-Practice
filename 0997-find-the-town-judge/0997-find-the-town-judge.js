/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (n === 1) return 1;
    let town = new Map();
    
    for (let i = 0; i < trust.length; i++) {
        if (!town.has(trust[i][0])) town.set(trust[i][0],new Set());
        if (!town.has(trust[i][1])) town.set(trust[i][1],new Set());
        
        town.get(trust[i][0]).add(trust[i][1]);
    }

    let possibleJudge
    for (let [person,trustee] of town) {
        if (!trustee.size) possibleJudge = person;
    }
    if (!possibleJudge) return -1;
    
    for (let [person,trustee] of town) {
        if (person !== possibleJudge && !trustee.has(possibleJudge)) return -1
    }
    
    return possibleJudge;
};