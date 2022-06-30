/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    let moves = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "X") {
            i += 2;
            moves++
        }
    }
    return moves
};