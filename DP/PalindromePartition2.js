// Given a string A, partition A such that every substring of the partition is a palindrome.

// Return the minimum cuts needed for a palindrome partitioning of A.

function palindromePartition(A) {
    const n = A.length, dp = [...Array(n)].map(e=>Array(n).fill(-1));
    
    function isPalindrome(i, j) {
        const s = A.slice(i,j+1), n = s.length;
        
        for(let i=0;i<n/2;i++) {
            if(s[i] !== s[n-i-1]) return false;
        }

        return true;
    }

    function countMinCut(s, e) {
        if(s===e || isPalindrome(s,e)) return 0;
        if(dp[s][e] !== -1) return dp[s][e];

        let cuts = Infinity;
        for(let i=s;i<=e;i++) {
            if(isPalindrome(s, i)) {
                cuts = Math.min(cuts, 1 + countMinCut(i+1, e));
            }
        }

        return dp[s][e]=cuts;
    }

    return countMinCut(0, n-1);
}

console.log(palindromePartition('dVGAaVO25EmT6W3zSTEA0k12i64Kkmmli09Kb4fArlF4Gc2PknrlkevhROxUg'));
console.log(palindromePartition("aab"));