// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a 
// space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

const Queue = require("../JS/Queue");

function wordBreak(s, wordDict) {
    const queue = new Queue();
    const words = new Set(wordDict);
    const seen = Array(s.length+1).fill(false);
    const n = s.length;
    queue.enqueue(0);

    while(!queue.isEmpty()) {
        let start = queue.dequeue();

        if(start === n) {
            return true;
        }

        for(let end=start+1;end<=n;end++) {
            if(seen[end]) continue;

            if(words.has(s.substring(start, end))) {
                queue.enqueue(end);
                seen[end] = true;
            }
        }
    }

    return false;
}

console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("applepenapple", ["apple","pen"]));
