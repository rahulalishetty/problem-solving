// Find the longest increasing subsequence of a given array of integers, A.

// In other words, find a subsequence of array in which the subsequence's elements are in strictly increasing order, and in which the subsequence is as long as possible.

// In this case, return the length of the longest increasing subsequence.

function longestIncreasingSubsequence(A) {
    const n = A.length, dp=[...Array(n)].map(e => Array(n).fill(-1));

    function find(i, prevI) {
        if(i===n) return 0;
        if(dp[i][prevI+1] !== -1) return dp[i][prevI+1];

        let noTake = find(i+1, prevI), take=0;

        if(prevI === -1 || A[i] > A[prevI]) {
            take = 1 + find(i+1, i);
        }

        return dp[i][prevI+1] = Math.max(noTake, take);
    }

    return find(0, -1);
}

function lisIterative(A) {
    const n = A.length, dp = Array(n).fill(1);
    let maxSize = 1;

    for(let i=1;i<n;i++) {
        for(let j=0;j<i;j++) {
            if(A[i] > A[j]) {
                dp[i] = Math.max(dp[i], dp[j]+1);
                maxSize = Math.max(dp[i], maxSize);
            }
        }
    }

    return maxSize;
}

console.log(lisIterative([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]));