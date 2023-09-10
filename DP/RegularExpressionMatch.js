// Implement wildcard pattern matching with support for ' ? ' and ' * ' for strings A and B.

// ' ? ' : Matches any single character.
// ' * ' : Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).

function matchRegularExpression(A, B) {
    const n = A.length, m = B.length, dp = [...Array(n)].map(e => Array(m).fill(-1));

    function match(i, j) {
        if(i<0) {
            while(j>=0) {
                if(B[j] === '*') j--;
                else false;
            }
            return true;
        }
        if(j<0) {
            return false;
        }
        if(dp[i][j] !== -1) return dp[i][j];

        let found = false;
        if(B[j] === '*') {
            found = match(i-1, j) || match(i-1, j-1) || match(i, j-1);
        } else if(B[j] === '?') {
            found = match(i-1, j-1);
        } else {
            found = A[i] === B[j] ? match(i-1, j-1) : false;
        }

        return dp[i][j] = found;
    }

    return match(n-1, m-1) ? 1 : 0;
}

function matchRegularExpressionIterative(A,B) {
    const n = A.length, m = B.length, dp = [...Array(2)].map(e => Array(m+1).fill(false));
    dp[0][0] = true;

    for(let j=1;j<=m &&B[j-1] === '*';j++) {
        dp[0][j] = true;
    }

    for(let i=1;i<=n;i++) {
        for(let j=1;j<=m;j++) {
            if(B[j-1] === '*') {
                dp[1][j] = dp[0][j] || dp[0][j-1] || dp[1][j-1];
            } else if(B[j-1] === '?') {
                dp[1][j] = dp[0][j-1];
            } else {
                dp[1][j] = A[i-1] === B[j-1] && dp[0][j-1];
            }
        }
        for(let j=0;j<=m;j++) {
            dp[0][j] = dp[1][j];
        }
    }
    console.log(dp);
    return dp[1][m] ? 1 : 0;
}

// console.log(matchRegularExpressionIterative('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
// 'a**************************************************************************************'));
console.log(matchRegularExpressionIterative("cc", "?"));