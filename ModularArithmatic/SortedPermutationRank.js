// Given a string A. Find the rank of the string amongst its permutations sorted lexicographically.
// Assume that no characters are repeated.

// Note: The answer might not fit in an integer, so return your answer % 1000003

const mod  = 1000003;
function fact(n) {
    if(n == 0 || n == 1)
        return 1;
    else
        return (n * fact(n - 1)) % mod;
}

function sortedPermutationRank(A) {
    const n = A.length;
    let ans = 0;
    for(let i=0;i<n;i++) {
        let count = 0;
        for(let j=i+1;j<n;j++) {
            if(A[j] < A[i]) count++;
        }
        ans += (count * fact(n-i-1)) % mod;
    }
    return (ans+1) % mod;
}

console.log(sortedPermutationRank("acb"));
console.log(sortedPermutationRank("adbc"));