// Given two integer arrays A and B of size N each which represent values and weights associated with N items respectively.

// Also given an integer C which represents knapsack capacity.

// Find out the maximum value subset of A such that sum of the weights of this subset is smaller than or equal to C.

// NOTE:

// You cannot break an item, either pick the complete item, or don’t pick it (0-1 property).

function knapsack(A,B,C) {
    let n = A.length, dp = [...Array(n)].map(e => Array(C).fill(-1));

    function selectItems(i, weight) {
        if(i===-1 || weight === 0) return 0;
        if(dp[i][weight] !== -1) return dp[i][weight];

        let value = 0;
        if(B[i] <= weight)
            value = Math.max(selectItems(i-1, weight), selectItems(i-1, weight-B[i]) + A[i])
    
        else value = selectItems(i-1, weight);
        
        return dp[i][weight] = value;
    }

    return selectItems(n-1, C);
}

function knapsackIterative(A,B,C) {
    let n=A.length, dp=[...Array(n+1)].map(e => Array(C+1).fill(0));

    for(let i=1;i<=n;i++) {
        for(let j=1;j<=C;j++) {
            if(B[i-1] <= j) {
                dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-B[i]] + A[i]);
            } else dp[i][j] = dp[i-1][j];
        }
    }

    return dp[n][C];
}