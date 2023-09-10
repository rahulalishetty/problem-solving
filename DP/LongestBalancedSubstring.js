// Given a string A made up of multiple brackets of type "[]" , "()" and "{}" find the length of the longest substring which forms a balanced string .

// Conditions for a string to be balanced :

// Blank string is balanced ( However blank string will not be provided as a test case ).
// If B is balanced : (B) , [B] and {B} are also balanced.
// If B1 and B2 are balanced then B1B2 i.e the string formed by concatenating B1 and B2 is also balanced.
const Stack = require("../Stacks/stack");

function longestBalancedSubstring(A) {
    const n = A.length,  dp = Array(n).fill(0);
    let max = 0;
    const closingTags = {
        "(":")",
        "{":"}",
        "[":"]"
    }
    
    for(i=1;i<n;i++) {
        if(!Object.keys(closingTags).includes(A[i])) {
            let opening = i-dp[i-1]-1;
            dp[i] = (Object.keys(closingTags).includes(A[opening]) && closingTags[A[opening]] === A[i]) 
                ? 
                    dp[i-1] + 2 + (
                        opening > 0
                        ?
                            dp[opening-1]
                        :
                            0
                        )
                :
                    0;
            max = Math.max(max, dp[i]);
        }
    }

    return max;
}

console.log(longestBalancedSubstring("'[[{()}]]'"));
console.log(longestBalancedSubstring('[]]][[}{}()[][{])((]({[]))[[)'));
console.log(longestBalancedSubstring('))(}[[[[)[(({))((()]]{][[[][{]]][)[]}]])])]}}[]](]())[[}[]}){[[)[][)(]{)]))[[[]{][([['));