// Given a linked list of integers. Find and return the length of the longest palindrome list that exists in that linked list.

// A palindrome list is a list that reads the same backward and forward.

// Expected memory complexity : O(1)

function longestPalindromeList(A) {
    function countCommon(a, b) {
        let count=0;
        for(;a&&b;a=a.next,b=b.next) {
            if(a.data === b.data) {
                count++;
            } else {
                break;
            }
        }
        return count;
    }

    let prev=null,cur=A,result=0,next=null;

    while(cur!==null) {
        next = cur.next;
        cur.next = prev;
        result = Math.max(result, 2*countCommon(prev, next) + 1); //odd length pallindrome
        result = Math.max(result, 2*countCommon(cur, next) + 1); //even length pallindrome
        prev = cur;
        cur = next;
    }

    return result;
}