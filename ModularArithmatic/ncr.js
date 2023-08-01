// Given three integers A, B, and C, where A represents n, B represents r, and C represents m, find and 
// return the value of nCr % m where nCr % m = (n!/((n-r)!*r!))% m.

// x! means factorial of x i.e. x! = 1 * 2 * 3... * x.

function ncr(A,B,C) {
    let dp = new Array(A + 1).fill(0).map(() => new Array(B + 1).fill(0));
    dp[0][0] = 1;
    for (let i = 1; i <= A; i++) {
        dp[i][0] = 1;
        for (let j = 1; j <= B; j++) {
            // nCr = (n - 1)C(r - 1) + (n - 1)Cr
            dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % C;
        }
    }
    return dp[A][B];
}

console.log(ncr(5,2,13));
console.log(ncr(6,2,13));