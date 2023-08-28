// Given a string A denoting a stream of lowercase alphabets, you have to make a new string B.
// B is formed such that we have to find the first non-repeating character each time a character is inserted to the stream and append it at the end to B. If no non-repeating character is found, append '#' at the end of B.

const Queue = require("./Queue");

function firstNonRepeatingCharacter(A) {
    const queue = new Queue(), cache={};
    let ans='';
    A=A.split("");

    for(let i=0;i<A.length;i++) {
        cache[A[i]] = (cache[A[i]] || 0)+1;
        queue.enqueue(A[i]);

        while(cache[queue.peek()] > 1) queue.dequeue();

        if(queue.empty()) {
            ans += '#';
        } else {
            ans += queue.peek();
        }
    }

    return ans;
}

console.log(firstNonRepeatingCharacter("abadbc"));
console.log(firstNonRepeatingCharacter("abcabc"));