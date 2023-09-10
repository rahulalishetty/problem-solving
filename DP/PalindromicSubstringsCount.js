// Given a string A consisting of lowercase English alphabets. Your task is to find how many substrings of A are palindrome.

// The substrings with different start indexes or end indexes are counted as different substrings even if they consist of same characters.

// Return the count of palindromic substrings.

// Note: A string is palindrome if it reads the same from backward and forward.

function countPalindromicSubstrings(A) {
    const n = A.length, dp = [...Array(n)].map(e => Array(n).fill(-1));

    function isPalindrome(i, j) {
        const s = A.slice(i,j+1), n = s.length;
        
        for(let i=0;i<n/2;i++) {
            if(s[i] !== s[n-i-1]) return false;
        }

        return true;
    }

    function countPalindromes(i, j) {
        if(i>j) return 0;
        if(dp[i][j] !== -1) return dp[i][j];

        let count = 0;
        if(isPalindrome(i,j)) {
            count = 1; 
        } 
        count += countPalindromes(i+1, j) + countPalindromes(i, j-1) - countPalindromes(i+1, j-1);
        
        return dp[i][j]=count;
    }

    return countPalindromes(0,n-1);
}

console.log(countPalindromicSubstrings("abab"));
console.log(countPalindromicSubstrings("ababa"));