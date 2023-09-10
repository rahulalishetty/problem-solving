// You are given an array A of N integers and three integers B, C, and D.

// You have to find the maximum value of A[i]*B + A[j]*C + A[k]*D, where 1 <= i <= j <= k <= N.

function maximumSumValue(A, B, C, D) {
    const n = A.length;
    let dp = [...Array(n+1)].map(e => Array(3).fill(-Infinity));

    for(let i=1;i<=n;i++) {
        dp[i][0] = Math.max(dp[i-1][0], A[i-1] * B);
        dp[i][1] = Math.max(dp[i-1][1], dp[i][0] + A[i-1] * C);
        dp[i][2] = Math.max(dp[i-1][2], dp[i][1] + A[i-1] * D);
    }
    
    return dp[n][2];
}

function recursiveMaxSumValue(A,B,C,D) {
    const n = A.length;
    const mul = [B,C,D];

    function findMaxSum(index, m) {
        if(m===mul.length) return 0;
        let sum = -Infinity;

        for(let i=index;i<n;i++) {
            sum = Math.max(sum, A[i] * mul[m] + findMaxSum(i, m+1));
        }
        return sum;
    }

    return findMaxSum(0, 0);
}

console.log(recursiveMaxSumValue([1, 5, -3, 4, -2], 2, 1, -1));