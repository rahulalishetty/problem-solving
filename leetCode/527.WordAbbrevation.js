// Given an array of distinct strings words, return the minimal possible abbreviations for every word.

// The following are the rules for a string abbreviation:

// The initial abbreviation for each word is: the first character, then the number of characters in between, followed by the last character.
// If more than one word shares the same abbreviation, then perform the following operation:
// Increase the prefix (characters in the first part) of each of their abbreviations by 1.
// For example, say you start with the words ["abcdef","abndef"] both initially abbreviated as "a4f". Then, a sequence of operations would be ["a4f","a4f"] -> ["ab3f","ab3f"] -> ["abc2f","abn2f"].
// This operation is repeated until every abbreviation is unique.
// At the end, if an abbreviation did not make a word shorter, then keep it as the original word.
 

// Example 1:

// Input: words = ["like","god","internal","me","internet","interval","intension","face","intrusion"]
// Output: ["l2e","god","internal","me","i6t","interval","inte4n","f2e","intr4n"]
// Example 2:

// Input: words = ["aa","aaa"]
// Output: ["aa","aaa"]
 

// Constraints:

// 1 <= words.length <= 400
// 2 <= words[i].length <= 400
// words[i] consists of lowercase English letters.
// All the strings of words are unique.

function wordsAbbreviationGreedyApproach(words) {
    function abbrev(word, i) {
        const n = word.length;
        if(n-i <= 3) return word;
        return word.substring(0, i+1) + `${n-i-2}` + word.charAt(n-1);
    }

    const n = words.length;
    const ans = [], prefix = Array(n).fill(0);


    for(let i=0;i<n;i++) {
        ans.push(abbrev(words[i], 0));
    }

    for(let i=0;i<n;i++) {
        while(true) {
            let dupes = new Set();
            for(let j=i+1;j<n;j++)
                if(ans[i] === ans[j])
                    dupes.add(j);

            if(!dupes.size) break;
            dupes.add(i);

            for(let k of dupes) {
                ans[k] = abbrev(words[k], ++prefix[k]);
            }
        }
    }

    return ans;
}

console.log(wordsAbbreviationGreedyApproach(["like","god","internal","me","internet","interval","intension","face","intrusion"]));
console.log(wordsAbbreviationGreedyApproach(["aa","aaa"]));

function wordsAbbreviationGroupingAndLeastCommonPrefixApproach(words) {
    function abbrev(word, i) {
        const n = word.length;
        if(n-i <= 3) return word;
        return word.substring(0, i+1) + `${n-i-2}` + word.charAt(n-1);
    }

    function longestCommonPrefix(word1, word2) {
        let i=0;
        while(i < word1.length && i < word2.length && word1.charAt(i) === word2.charAt(i)) i++;
        return i;
    }

    const n = words.length;
    const ans = new Array(n), groups = {};

    for(const [i, word] of words.entries()) {
        let key = abbrev(words[i], 0);
        if(groups.hasOwnProperty(key)) {
            groups[key].push({word, i})
        } else {
            groups[key] = [{word, i}];
        }
    }

    for(const [a, group] of Object.entries(groups)) {
        group.sort((a, b) => a.word.localeCompare(b.word));

        const lcp = Array(group.length).fill(0);
        for (let i = 1; i < group.length; ++i) {
            const p = longestCommonPrefix(group[i-1].word, group[i].word);
            lcp[i] = p;
            lcp[i-1] = Math.max(lcp[i-1], p);
        }

        for(let i=0;i<group.length;i++)
            ans[group[i].i] = abbrev(group[i].word, lcp[i]);
    }

    return ans;
}

console.log(wordsAbbreviationGroupingAndLeastCommonPrefixApproach(["like","god","internal","me","internet","interval","intension","face","intrusion"]));
console.log(wordsAbbreviationGroupingAndLeastCommonPrefixApproach(["aa","aaa"]));

function wordsAbbreviationGroupingAndTrieApproach(words) {
    function abbrev(word, i) {
        const n = word.length;
        if(n-i <= 3) return word;
        return word.substring(0, i+1) + `${n-i-2}` + word.charAt(n-1);
    }

    const n = words.length;
    const ans = new Array(n), groups = {};

    for(const [i, word] of words.entries()) {
        let key = abbrev(words[i], 0);
        if(groups.hasOwnProperty(key)) {
            groups[key].push({word, i})
        } else {
            groups[key] = [{word, i}];
        }
    }
    const aCode = 'a'.charCodeAt(0);
    for(const [a, group] of Object.entries(groups)) {
        const trie = new TrieNode();
        for (const [i, groupWord] of group.entries()) {
            let cur = trie;
            for(let character of groupWord.word.substring(1).split('')) {
                if(!cur.children[character.charCodeAt(0) - aCode]) 
                    cur.children[character.charCodeAt(0) - aCode] = new TrieNode();

                cur.count++;
                cur = cur.children[character.charCodeAt(0) - aCode];
            }
        }

        for (const [i, groupWord] of group.entries()) {
            let cur = trie;
            let i = 1;
            for(let character of groupWord.word.substring(1).split('')) {
                if(cur.count === 1) break; 
                cur = cur.children[character.charCodeAt(0) - aCode];
                i++;
            }
            ans[groupWord.i] = abbrev(groupWord.word, i-1);
        }
    }

    return ans;
}


console.log(wordsAbbreviationGroupingAndTrieApproach(["like","god","internal","me","internet","interval","intension","face","intrusion"]));
console.log(wordsAbbreviationGroupingAndTrieApproach(["aa","aaa"]));


