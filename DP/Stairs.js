// You are climbing a staircase and it takes A steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Return the number of distinct ways modulo 1000000007


function stairsRDP(n) {
    const dp = Array(n+1).fill(-1), mod = 1e9+7;

    function findDistinctWays(n) {
        if(n === 0) return 1;
        if(n < 0) return 0;
        if(dp[n] !== -1) return dp[n];
    
        const ways = (findDistinctWays(n-1) + findDistinctWays(n-2)) % mod;
        dp[n] = ways;
        return ways;
    }

    return findDistinctWays(n);
}

function stairsIterativeDP(n) {
    const dp = Array(n+1).fill(0), mod = 1e9+7;
    dp[0] = 1;

    for(let i=1;i<=n;i++) {
        dp[i] = (dp[i-1] + ((i-2 >= 0) ? dp[i-2] : 0)) % mod;
    }

    return dp[n];
}

console.log(stairsIterativeDP(2));
console.log(stairsIterativeDP(3));