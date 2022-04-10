// https://leetcode.com/problems/construct-the-rectangle/submissions/

/* TWO POINT METHOD
    Take the last number (area size) and the first number. Check the value when they are multiplied. If the pairs match the area, push them into a pair array.

    Do this until the pointers meet. This will be a maximum time complexity of O(n)

    Then take the very last pair array.
*/

let constructRectangle = function (area) {
    let first = 1;
    let last = area;

    let pairs = [];

    while (last >= first) {
        if (last * first > area) {
            last--; //= last - 1
        } else if (last * first < area) {
            first++; //= first + 1
        } else {
            pairs.push([last, first]);
            first++;
        }
    }

    return pairs.slice(-1)[0];

    /*
    let pairs = {};

    let i = 1;
    while (i <= area) {
        let pair = area / i;
        if (pairs[pair] || i === pair) return [i, pair];
        pairs[i] = true;
        i++;
    }
    */
};

console.log(constructRectangle(432));
console.log(constructRectangle(37));
console.log(constructRectangle(122122));
