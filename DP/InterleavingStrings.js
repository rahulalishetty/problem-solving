// Given A, B, C find whether C is formed by the interleaving of A and B.

function isInterleaving(A,B,C) {
    const l = A.length, m = B.length, n = C.length, dp = [...Array(l)].map(e => Array(m).fill(-1));

    function findMatch(i,j,k) {
        if(i<0 && j<0) {
            if(k<0) return true;
            else return false;
        } else if(k<0) return true;
        if(dp[i][j] !== -1) return dp[i][j];

        let found = false;
        if(i>=0 && A[i] === C[k] && j>=0 && B[j] === C[k]) {
            found = findMatch(i-1,j,k-1) || findMatch(i,j-1,k-1);
        } else if(i>=0 && A[i] === C[k]) {
            found = findMatch(i-1,j,k-1);
        } else if(j>=0 && B[j] === C[k]) {
            found = findMatch(i,j-1,k-1);
        } else found = false;

        return dp[i][j] = found;
    }
     
    return findMatch(l-1, m-1, n-1);
}

console.log(isInterleaving("aabcc", "dbbca", "aadbbcbcac"));
console.log(isInterleaving("aabcc", "dbbca", "aadbbbaccc"));
