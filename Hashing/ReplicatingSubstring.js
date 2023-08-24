// Given a string B, find if it is possible to re-order the characters of the string B so that it can be represented as a concatenation of A similar strings.

// Eg: B = aabb and A = 2, then it is possible to re-arrange the string as "abab" which is a concatenation of 2 similar strings "ab".

// If it is possible, return 1, else return -1.

function replicatingSubstring(A,B) {
    const n=B.length, cache={};
    B.split("").forEach(c => {
        cache[c] = (cache[c] || 0) + 1;
    });

    let isPossible = 1;
    Object.keys(cache).forEach(key => {
        if(cache[key] % A) isPossible=-1; 
    });
    return isPossible;
}

console.log(replicatingSubstring(2, "bbaabb"));
console.log(replicatingSubstring(2, "bc"));