// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given an encoded message denoted by string A containing digits, determine the total number of ways to decode it modulo 109 + 7.


function waysToDecode(A) {
    const mod = 1e9+7, n = A.length;

    function countWays(i) {
        if(i===n) return 1;

        let ways = 0;
        let a = A.slice(i, i+1);
        if(a > 0) {
            ways += countWays(i+1);
        }

        a = A.slice(i, i+2);
        if(a >= 10 && a <= 26) {
            ways += countWays(i+2);
        }
        
        return ways % mod;
    }

    return countWays(0) % mod; 
}

function waysToDecodeIterative(A) {
    const mod = 1e9+7, n = A.length;
    const dp = Array(n+1).fill(0);
    dp[0] = 1;

    for(let i=1;i<=n;i++) {
        let a = A.slice(i-1, i);
        if(a>0) {
            dp[i] = (dp[i] + dp[i-1]) % mod;
        }

        a = A.slice(i-2, i);
        if(a>=10 && a<=26) {
            dp[i] = (dp[i] + dp[i-2]) % mod;
        }
    }

    return dp[n];
}

console.log(waysToDecodeIterative("8"));
console.log(waysToDecodeIterative("12"));