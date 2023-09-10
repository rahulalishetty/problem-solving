// Given two sequences A and B, count number of unique ways in sequence A, to form a subsequence that is identical to the sequence B.

// Subsequence : A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

function distinctSubsequences(A,B) {
    const n = A.length, m = B.length, dp=[...Array(n)].map(e => Array(m).fill(-1));

    function count(i, j) {
        if(j < 0) return 1;
        if(i < 0) return 0;
        if(dp[i][j] !== -1) return dp[i][j];

        let c = count(i-1, j);
        if(A[i] === B[j]) {
            c += count(i-1, j-1);
        } 

        return dp[i][j] = c;
    }

    return count(n-1, m-1);
}

function distinctSubsequencesIterative(A,B) {
    const n = A.length, m = B.length, dp=[...Array(n+1)].map(e => Array(m+1).fill(0));
    
    for(let i=0;i<=n;i++) {
        dp[i][0] = 1; 
    }

    for(let i=1;i<=n;i++) {
        for(let j=1;j<=m;j++) {
            let c = dp[i-1][j];
            if(A[i-1] === B[j-1]) {
                c += dp[i-1][j-1];
            }
            dp[i][j] = c;
        }
    }

    return dp[n][m];
}

console.log(distinctSubsequencesIterative("rabbbit", "rabbit"));