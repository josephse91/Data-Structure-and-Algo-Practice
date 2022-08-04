/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  let domains = {};
    let output = [];
    
    for (let i = 0; i< cpdomains.length; i++) {
        let arr = cpdomains[i].split(" ")
        let rep = Number(arr[0]);
        let domainFull = arr[1];
        let currDomain  = "";
        
        for (let j = domainFull.length - 1; j >=0; j-- ) {

            if (domainFull[j] === ".") {
                domains[currDomain] ? domains[currDomain] += rep : domains[currDomain] = rep;
            }
            currDomain = domainFull[j] + currDomain
        }
        domains[domainFull] ? domains[domainFull] += rep : domains[domainFull] = rep;
    }
    for (let doms in domains) {
        let str = domains[doms] + " " + doms;
        output.push(str);
    }
    return output
};

// Must record the subdomains with the corresponding rep. This rep should be added if visited upon later. This means, I'm thinking it should be initialized with zero and added upon as its found