// You are trying to send signals to aliens using a linear array of A laser lights. You don't know much about how the aliens are going to percieve the signals, but what you know is that if two consecutive lights are on then the aliens might take it as a sign of danger and destroy the earth.

// Find and return the total number of ways in which you can send a signal without compromising the safty of the earth. Return the ans % 109 + 7.

function waysForSignals(A) {
    const mod = 1e9+7, dp=Array(A+1).fill(-1);

    function find(i) {
        if(i === 0 || i === 1) return i+1;
        if(dp[i] !== -1) return dp[i];

        let count = (find(i-1) + find(i-2)) % mod;

        return dp[i] = count;
    }
    
    return find(A);
}

console.log(waysForSignals(3));
console.log(waysForSignals(2));