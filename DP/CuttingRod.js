// Given a rod of length N units and an array A of size N denotes prices that contains prices of all pieces of size 1 to N.

// Find and return the maximum value that can be obtained by cutting up the rod and selling the pieces.

function cuttingRod(A) {
    const n = A.length, dp = Array(n+1).fill(-1);

    function findMaxValue(size) {
        if(size === 0) return 0;
        if(dp[size] !== -1) return dp[size]; 

        let maxValue = 0;
        for(let i=0;i<n;i++) {
            if(size - (i+1) >= 0) maxValue = Math.max(maxValue, findMaxValue(size - (i+1)) + A[i]);
        }

        return dp[size] = maxValue;
    }

    return findMaxValue(n);
}

console.log(cuttingRod([3, 4, 1, 6, 2]));