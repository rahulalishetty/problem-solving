// Given a grid of size n * m, lets assume you are starting at (1,1) and your goal is to reach (n, m). 
// At any instance, if you are on (x, y), you can either go to (x, y + 1) or (x + 1, y).

// Now consider if some obstacles are added to the grids. 
// Return the total number unique paths from (1, 1) to (n, m).

// Note: An obstacle is marked as 1 and empty space is marked 0 respectively in the grid.

function uniquePaths(A) {
    const n = A.length, m = A[0].length;
    const dp = [...Array(n)].map(e => Array(m).fill(0));

    if(A[0][0] || A[n-1][m-1]) return 0;
    dp[0][0] = 1;

    for(let row=0;row<n;row++) {
        for(let col=0;col<m;col++) {
            if((row === 0 && col === 0) || A[row][col] === 1) continue;

            const left = col > 0 ? dp[row][col-1] : 0;
            const top = row > 0 ? dp[row-1][col] : 0;
            dp[row][col] = left + top;
        }
    }
    
    return dp[n-1][m-1];
}

console.log(uniquePaths([[1, 0]]));
console.log(uniquePaths(([[0, 0]])))