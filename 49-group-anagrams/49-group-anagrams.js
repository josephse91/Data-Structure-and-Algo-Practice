/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/* Neetcode solution
Each word within the strs should be iterated through
With each word, we want to check whether or not there has already been the same correction of letters that has been checked, thus being an Anagram

In order to check and document if there has been a corresponding anagram, we must create an object that will hold letter collections of words that have already been visited

To create key value pairs in the anagram object, we need to create the key which will represent the visited word's containing letters. 
- This is difficult because with the key, the letters always need to be written in the same order. In order to address this, we need to create an array which will represent the count of a letter at a respective index. Once we have the array of character counts for the word, we will stringify it and make it the key. It solves the problem of the key needing a specific order.
- The value will be an array containing the words that have this key of characters.

Alternative solution (sorting)

You can sort each word and whichever words equal a previous word has an anagram.
*/

const CODES = {
    a: 0,
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
};

function groupAnagrams(words) {
    const map = Object.create(null);
    for (const word of words) {
        const hash = hashWord(word);
        if (!(hash in map)) {
            map[hash] = [];
        }
        map[hash].push(word);
    }

    const groups = [];
    for (const key in map) {
        groups.push(map[key]);
    }
    return groups;
}

function hashWord(word) {
    const hash = new Array(26).fill(0);
    for (const ch of word) {
        ++hash[CODES[ch]];
    }
    return hash.toString();
}