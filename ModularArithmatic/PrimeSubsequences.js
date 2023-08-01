// Given an array A having N positive numbers. You have to find the number of Prime subsequences of A.
// A Prime subsequence is one that has only prime numbers, for example [2, 3], [5] are the Prime subsequences 
// where [2, 4] and [1, 2, 3, 4] are not.

function primeSubsequences(A) {
    const max = Math.max(...A);
    const primeFactors = Array(max+1).fill(0);
    const n = A.length, mod = 1e9+7;
    for(let i=2;i<=max;i++){
        if(primeFactors[i]) continue;
        for(let j=2*i;j<=max;j+=i){
            primeFactors[j]++;
        }
    }
    let count = 0, ans = 2;
    for(let i=0;i<n;i++){
        if(A[i] > 1 && primeFactors[A[i]] === 0) count++;
    }
    for(let i=0; i<count-1;i++) ans = (ans * 2) % mod;
    return count === 0 ? 0 : ans-1;
}

console.log(primeSubsequences([1,2,3]));