// You are given three integers n, m and k. Consider the following algorithm to find the maximum element of an array of positive integers:


// You should build the array arr which has the following properties:

// arr has exactly n integers.
// 1 <= arr[i] <= m where (0 <= i < n).
// After applying the mentioned algorithm to arr, the value search_cost is equal to k.
// Return the number of ways to build the array arr under the mentioned conditions. As the answer may grow large, the answer must be computed modulo 109 + 7.


function findArraysWithKMaxCmp(n,m,k) { // O(n*m*m*k)
    const mod = 1e9+7, dp = [...Array(n)].map(e => [...Array(m+1)].map(f => Array(k+1).fill(-1)));

    function find(i, maxSoFar, remain) {
        if(i === n) {
            if(remain === 0) return 1;
            else return 0;
        }
        if(remain < 0) return 0;
        if(dp[i][maxSoFar][remain] !== -1) return dp[i][maxSoFar][remain];

        let count = 0;
        for(let num = 1;num <= maxSoFar;num++) {
            count = (count + find(i+1, maxSoFar, remain)) % mod;
        }

        for(let num=maxSoFar+1;num<=m;num++) {
            count = (count + find(i+1, num, remain-1)) % mod;
        }
        
        return dp[i][maxSoFar][remain] = count;
    }

    return find(0, 0, k);
}

function findArraysWithKMaxCmpIterative(n,m,k) { // O(n*m*m*k)
    const mod = 1e9+7, dp = [...Array(n+1)].map(e => [...Array(m+1)].map(f => Array(k+1).fill(0)));

    for(let num=0;num<dp[0].length;num++) {
        dp[n][num][0] = 1;
    }

    for(let i=n-1;i>=0;i--) {
        for(let maxSoFar = m;maxSoFar>=0;maxSoFar--) {
            for(let remain=0;remain<=k;remain++) {
                let ans=0;
                for(let num=1;num<=maxSoFar;num++) {
                    ans = (ans + dp[i+1][maxSoFar][remain]) % mod;
                }

                if(remain > 0) {
                    for(let num=maxSoFar+1;num<=m;num++) {
                        ans = (ans + dp[i+1][num][remain-1]) % mod;
                    }
                }
                dp[i][maxSoFar][remain] = ans;
            }
        }
    }

    return dp[0][0][k];
}

function findArrayWithKMaxCmpPrefix(n,m,k) {
    const mod = 1e9+7, 
        dp = [...Array(n+1)].map(e => [...Array(m+1)].map(f => Array(k+1).fill(0))),
        prefix = [...Array(n+1)].map(e => [...Array(m+1)].map(f => Array(k+1).fill(0)));

    for(let num=1;num<=m;num++) {
        dp[1][num][1] = 1;
        prefix[1][num][1] = prefix[1][num-1][1] + 1;
    }

    for(let i=1;i<=n;i++) {
        for(let maxNum = 1;maxNum <= m;maxNum++) {
            for(let cost = 1;cost <= k;cost++) {
                let ans = (maxNum * dp[i-1][maxNum][cost]) % mod;
                ans = (ans + prefix[i-1][maxNum-1][cost-1]) % mod;

                dp[i][maxNum][cost] += ans;
                dp[i][maxNum][cost] %= mod;

                prefix[i][maxNum][cost] = (prefix[i][maxNum-1][cost] + dp[i][maxNum][cost]);
                prefix[i][maxNum][cost] %= mod;
            }
        }
    }

    return dp[n][m][k];
}


console.log(findArraysWithKMaxCmpIterative(2,3,1));
console.log(findArraysWithKMaxCmpIterative(5,2,3));
console.log(findArraysWithKMaxCmpIterative(9,1,1));