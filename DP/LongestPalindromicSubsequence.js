// Given a string A. Find the longest palindromic subsequence (A subsequence which does not need to be contiguous and is a palindrome).

// You need to return the length of longest palindromic subsequence.

function longestPalindromicSubsequence(A) {
    const n = A.length, dp = [...Array(n)].map(e => Array(n).fill(-1));

    function find(i, j) {
        if(i>j) return 0;
        if(i===j) return 1;
        if(dp[i][j] !== -1) return dp[i][j];
        
        let count = 0;
        if(A[i]===A[j]) {
            count += 2 + find(i+1, j-1);
        } else {
            count += Math.max(find(i+1,j), find(i,j-1));
        }

        return dp[i][j]=count;
    }

    return find(0, n-1);
}

function longestPalindromicSubsequenceIterative(s) {
    const n = s.length, dp = [...Array(n)].map(e => Array(n).fill(0));
    
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }

    for (let startIndex = n - 1; startIndex >= 0; startIndex--) {
        for (let endIndex = startIndex + 1; endIndex < n; endIndex++) {
            if (s[startIndex] === s[endIndex]) {
                dp[startIndex][endIndex] = dp[startIndex + 1][endIndex - 1] + 2;
            } else {
                dp[startIndex][endIndex] = Math.max(dp[startIndex + 1][endIndex], dp[startIndex][endIndex - 1]);
            }
        }
    }

    return dp[0][n-1];
}

console.log(longestPalindromicSubsequenceIterative("bebeeed"));
console.log(longestPalindromicSubsequenceIterative("aedsead"));