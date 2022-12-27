class TrieNode {
    constructor(no_of_childrens = 26, is_end_of_word = false) {
        this.child = (new Array(no_of_childrens)).map(curr => null)
        this.is_end_of_word = is_end_of_word;
    }
}

class Trie {
    constructor() { this.root = new TrieNode(); }

    getNode() { return new TrieNode() }

    getIndex(char) { return char.charCodeAt(0) - 97; }

    isPresent(curr, char) {
        let idx = this.getIndex(char);
        return curr.child[idx];
    }

    insert(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            let idx = this.getIndex(word[i]);
            if (!this.isPresent(curr, word[i])) { curr.child[idx] = this.getNode() }
            curr = curr.child[idx];
        }
        curr.is_end_of_word = true;
    }

    search(word) {
        let curr = this.root;
        for (let val of word) {
            let idx = this.getIndex(val);
            if (!this.isPresent(curr, val)) { return false; }
            curr = curr.child[idx];
        }
        // return curr.is_end_of_word;
        return curr;
    }

    startsWithRec(curr, word) {
        if (curr.is_end_of_word) { console.log(word); }
        let len = curr.child.length;
        for (let i = 0; i < len; i++) {
            if (curr.child[i]) { this.startsWithRec(curr.child[i], word + String.fromCharCode(i + 97)); }
        }
    }

    startsWith(word) {
        let curr = this.search(word);
        if (!curr) console.log("Not present any word");
        else this.startsWithRec(curr, word);
    }
}

let arr = ['ab', 'aab', 'aba', 'abab', 'baa', 'bac']
let trie1 = new Trie();
for (let val of arr) trie1.insert(val);

// console.log(trie1.search('abba'));
trie1.startsWith('a')

