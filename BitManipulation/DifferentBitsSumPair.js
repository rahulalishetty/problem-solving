// We define f(X, Y) as the number of different corresponding bits in the binary representation of X and Y.
// For example, f(2, 7) = 2, since the binary representation of 2 and 7 are 010 and 111, respectively. 
// The first and the third bit differ, so f(2, 7) = 2.

// You are given an array of N positive integers, A1, A2,..., AN. 
// Find sum of f(Ai, Aj) for all pairs (i, j) such that 1 ≤ i, j ≤ N. Return the answer modulo 109+7.

function pairSum(A) {
    const n = A.length, mod = 1e9+7;
    let result = 0;
    for(let i=0;i<32;i++) {
        let count = 0;
        for(let j=0;j<n;j++) {
            if((A[j] >> i) & 1) count++;
        }
        result = result + (count * (n-count) * 2) % mod;
    }
    return result;
}

console.log(pairSum([1, 3, 5]));
console.log(pairSum([2, 3]));