// Given an integer A. Return minimum count of numbers, sum of whose squares is equal to A.

function minimumSquares(n) {
    const dp = Array(n+1).fill(-1);
    function findMinSquares(n) {
        if(n === 0) return 0;
        if(n < 0) return -1;
        if(dp[n] !== -1) return dp[n];

        let squares = Infinity;
        for(let i=1;i*i<=n;i++) {
            squares = Math.min(squares, 1 + findMinSquares(n-i*i)); 
        }

        return dp[n] = squares;
    }
    
    return findMinSquares(n); 
}

function iterativeMinimumSquares(n) {
    const dp = Array(n+1).fill(0);
    dp[0] = 0;
    dp[1] = 1;

    for(let i=1;i<=n;i++) {
        dp[i] = i;
        for(let j=1;j*j<=i;j++) {
            dp[i] = Math.min(dp[i], dp[i-(j*j)]+1);
        }
    }

    return dp[n];
}

console.log(iterativeMinimumSquares(6));
console.log(iterativeMinimumSquares(13));