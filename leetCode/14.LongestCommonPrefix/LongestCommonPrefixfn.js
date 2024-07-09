// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

function TrieNode() {
    this.children = {};
    this.isEnd = false;
}

function Trie() {
    this.root = new TrieNode();
}

Trie.prototype.insert = function (word) {
    let node = this.root;

    for(let c of word) {
        if(!node.children[c]) {
            node.children[c] = new TrieNode();
        }
        node = node.children[c];
    }
    node.isEnd = true;
}

Trie.prototype.search = function (word) {
    let node = this.root;
    let prefix = "";
    for(let c of word) {
        if(node.children[c] && Object.keys(node.children).length === 1 && !node.isEnd) {
            prefix += c;
            node = node.children[c];
        } else break;
    }
    return prefix;
}


function longestCommonPrefix(words) {
    if(words.length === 1) return words[0];
    const first = words[0];
    const trie = new Trie();
    for(let i=1;i<words.length;i++) {
        trie.insert(words[i]);
    }
    return trie.search(first);
}

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));