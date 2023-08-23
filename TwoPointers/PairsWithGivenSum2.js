// Given a sorted array of integers (not necessarily distinct) A and an integer B, find and return how many pair of integers ( A[i], A[j] ) such that i != j have sum equal to B.

// Since the number of such pairs can be very large, return number of such pairs modulo (109 + 7).

function pairsWithGivenSum2(A,B) {
    const n = A.length,mod=1e9+7;
    let l=0,h=n-1,ans=0;

    while(l<h) {
        let sum = A[l] + A[h];

        if(sum === B) {
            if(A[l] === A[h]) {
                const range = h-l+1;
                ans = (ans + (range * (range-1))/2) % mod;
                break;
            }
        
            let a=1,b=1;
            while(l<h && A[l]===A[l+1]) a++,l++;
            while(l<h && A[h]===A[h-1]) b++,h--;
            l++,h--;
            ans = (ans + a*b) % mod; 
        } else if(sum > B) h--;
        else l++;
    }
    return ans;
}

console.log(pairsWithGivenSum2([1, 1, 1], 2));
console.log(pairsWithGivenSum2([1, 5, 7, 10], 8));