// Given an integer array, A of size N.
// You have to find all possible non-empty subsequences of the array of numbers and then,
// for each subsequence, find the difference between the largest and smallest number in that subsequence.
// Then add up all the differences to get the number.

// As the number may be large, output the number modulo 1e9 + 7 (1000000007).

// NOTE: Subsequence can be non-contiguous.

function sumDifference(A) {
    const n = A.length;
    A.sort((a,b) => a-b);
    const MOD = 1e9+7;

    let maxSum = 0, minSum = 0;
    for(let i=0;i<n;i++) {
        maxSum = (((2*maxSum) % MOD) + A[n-i-1]) % MOD;
        minSum = (((2*minSum) % MOD) + A[i]) % MOD;
    }

    return (maxSum - minSum + MOD) % MOD;
}

console.log(sumDifference([3,5,10]));