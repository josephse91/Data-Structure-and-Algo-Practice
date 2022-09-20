
function TrieNode() {
    this.neighbors = new Map();
    this.terminal = false;
}

var Trie = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let wordArr = word.split("");
    
    let curr = this.root;
    while(wordArr.length) {
        let front = wordArr.shift();
        
        if (!curr.neighbors.has(front)) {
            curr.neighbors.set(front, new TrieNode());
        } 
        curr = curr.neighbors.get(front);
        if (!wordArr.length) curr.terminal = true;
    }
    
};
/* Take top of the word. If the letter is in neighbor set, continue to next letter. If not, then continue to add letters until end of word

Is we are at the last letter, then make node terminal
*/

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let wordArr = word.split("");
    
    let curr = this.root;
    while (wordArr.length) {
        let front = wordArr.shift();
        if (curr.neighbors.has(front)) {
            curr = curr.neighbors.get(front);
        } else {
            return false;
        }
        
        if (!wordArr.length && !curr.terminal) return false;
    }
    return true;
};

/* If the letter is in the neighbors, continue to node, if not, return false
If the last letter of node is terminal, return true or else false.
*/

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let wordArr = prefix.split("");
    
    let curr = this.root;
    while (wordArr.length) {
        let front = wordArr.shift();
        if (curr.neighbors.has(front)) {
            curr = curr.neighbors.get(front);
        } else {
            return false;
        }
        
        if (!wordArr.length) return true;
    }
    return false;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */