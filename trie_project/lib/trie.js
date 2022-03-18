class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
   constructor() {
       this.root = new Node();
   }

   insertRecur(word, root = this.root) {
        // take the first letter of the word
        let letter = word[0];

        // if the current root doesn't have an outgoing edge for the given letter
        //      then we must create a new edge for the letter and point it to a new destination node
        if (!(letter in root.children)) {
            root.children[letter] = new Node();
        }

        // if there are no other characters in the word, then mark the destination node as terminal
        if (word.length === 1) {
            root.children[letter].isTerminal = true;
        } else {    // otherwise, we have remaining characters so recursively insert them into the destination node
            this.insertRecur(word.slice(1), root.children[letter]);
        }
    }

    insertIter(word) {
         let node = this.root;
        for (let idx = 0; idx < word.length; idx++) {
            
            let letter = word[idx];
            
            if (!(letter in node.children)) {
                node.children[letter] = new Node();
            }

            node = node.children[letter];
        }
        node.isTerminal = true;
    }

    searchRecur(word, root = this.root) {
        let node = root;
        let letter = word[0];

        if (!(letter in node.children)) return false;
        
        if (word.length <= 1 && node.children[letter].isTerminal) {
            return true;
        }

        node = node.children[letter]
        return this.searchRecur(word.slice(1), node)
    }

    searchIter(word) {
        if (word.length === 0) return true;

        let node = this.root;
        
        while (word.length) {
            let letter = word[0]
            if (!(letter in node.children)) return false;

            if (word.length === 1 && node.children[letter].isTerminal) {
                return true;
            }

            node = node.children[letter]
            word = word.slice(1)
        }
        return false;
    }

    wordsWithPrefix(prefix, root = this.root) {
        node = this.findStartNode(prefix)
        // At this point, I should have the root node that I need to find all of the terminal words

        let node = root;
        let prefixWord = prefix;
        let words = [];

        if (node.isTerminal) {
            words.push(prefixWord)
        }

        



    }

    findStartNode(prefix) {
        letter = prefix[0];
        let node = this.root;

        for (let i = 0; i < prefix.length; i++) {
            if (!(letter in node)) return []

            node = node.children[letter]

            letter = prefix[i+1]
        }
        return node
    }
}

module.exports = {
    Node,
    Trie
};