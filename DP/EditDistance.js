// Given two strings A and B, find the minimum number of steps required to convert A to B. (each operation is counted as 1 step.)

// You have the following 3 operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character

function editDistance(A,B) {
    const n = A.length, m = B.length, dp = [...Array(n+1)].map(() => Array(m+1).fill(-1));

    function find(i, j) {
        if(i === 0) {
            return dp[i][j] = j;
        }
        if(j === 0) {
            return dp[i][j] = i;
        }
        if(dp[i][j] !== -1) {
            return dp[i][j];
        }

        if(A[i-1] === B[j-1]) {
            return dp[i][j] = find(i-1, j-1);
        } else {
            const insert = find(i, j-1);
            const replace = find(i-1, j-1);
            const del = find(i-1, j);

            return dp[i][j] = Math.min(insert, replace, del) + 1;
        }
    }

    return find(n, m);
}

console.log(editDistance("abad", "abac"));