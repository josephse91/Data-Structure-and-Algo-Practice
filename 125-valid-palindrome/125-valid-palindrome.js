/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let alpha = {
        a: true,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7,
        i: 8,
        j: 9,
        k: 10,
        l: 11,
        m: 12,
        n: 13,
        o: 14,
        p: 15,
        q: 16,
        r: 17,
        s: 18,
        t: 19,
        u: 20,
        v: 21,
        w: 22,
        x: 23,
        y: 24,
        z: 25,
        0: true,
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true,
                }
    
    let i = 0, j = s.length - 1;
    // if (s.length <= 1) return true;

    while (i < j) {
        charFront = s[i].toLowerCase();
        charBack = s[j].toLowerCase();
        while (!alpha[charFront] || !alpha[charBack]) {
            if (!alpha[charFront]) {
                i++;
                charFront = s[i].toLowerCase()
            }
            
            if (!alpha[charBack]) {
               j--; 
                charBack = s[j].toLowerCase();
            } 
            if ( i >= j) return true;
        }
        
        console.log(charFront,charBack)
        if (charFront !== charBack) return false;
        i++;
        j--
    }
    
    return true;
};