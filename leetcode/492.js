let constructRectangle = function(area) {
    let first = 1;
    let last = area;
    
    let pairs = []
    
    while (last >= first) {
        if (last * first > area) {
            last-- //= last - 1
        } else if (last * first < area) {
            first++ //= first + 1
        } else {
            pairs.push([last,first])
            first++
        }
    }
    
    return pairs.slice(-1)[0]
};

console.log(constructRectangle(432))

