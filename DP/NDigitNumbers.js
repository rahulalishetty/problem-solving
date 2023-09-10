// Find out the number of A digit positive numbers, whose digits on being added equals to a given number B.

// Note that a valid number starts from digits 1-9 except the number 0 itself. i.e. leading zeroes are not allowed.

// Since the answer can be large, output answer modulo 1000000007

function nDigitNumbers(A,B) {
    const mod = 1e9+7, dp = [...Array(A+1)].map(e => Array(B+1).fill(-1));

    function count(l, sum) {
        if(sum< 0 || l<0) return 0;
        if(l>=0 && sum === 0) return 1;
        if(dp[l][sum] !== -1) return dp[l][sum]; 
        
        let totalCount = 0, start= (l===A ? 1 : 0);
        for(let i=start;i<=9;i++) {
            totalCount = (totalCount + count(l-1, sum-i)) % mod;
        }
        
        return dp[l][sum]=(totalCount%mod);
    }

    return count(A, B);
}

console.log(nDigitNumbers(2, 4));
console.log(nDigitNumbers(3, 4));
console.log(nDigitNumbers(75, 22));