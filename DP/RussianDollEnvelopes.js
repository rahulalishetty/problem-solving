// Given a matrix of integers A of size N x 2 describing dimensions of N envelopes, where A[i][0] denotes the height of the ith envelope and A[i][1] denotes the width of the ith envelope.

// One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

// Find the maximum number of envelopes you can put one inside other.

function findMaxEnvelopes(A) {
    const n = A.length;
    let maxEnv = 1, dp = Array(n).fill(1);
    A.sort((b,a) => {
        if(a[0]===b[0]) {
            return a[1]-b[1];
        } 
        return a[0]-b[0];
    });

    for(let i=1;i<n;i++) {
        for(let j=0;j<i;j++) {
            if(A[i][0] < A[j][0] && A[i][1] < A[j][1]) {
                dp[i] = Math.max(dp[j]+1, dp[i]);
                maxEnv = Math.max(dp[i], maxEnv);
            }
        }
    }

    return maxEnv;
}

console.log(findMaxEnvelopes([ 
    [5, 4],
    [6, 4],
    [6, 7],
    [2, 3]  
]));