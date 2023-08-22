// Given an array of integers A and an integer B, 
// find and return the maximum value K such that there is no subarray in A of size K 
// with the sum of elements greater than B.

function findSpecialInteger(A,B) {
    const prefix = [...A];
    const n = prefix.length;
    for(let i=1;i<n;i++) {
        prefix[i] += prefix[i-1];
    }

    function check(k) {
        k=k-1;
        for(let i=k;i<n;i++) {
            if(prefix[i] - (i-k-1 >=0 ? prefix[i-k-1] : 0) > B) return false;
        }
        return true;
    }

    let l=1,r=n,ans=0;

    while(l<=r) {
        const mid = (l+r) >> 1;

        if(check(mid)) {
            ans = mid;
            l=mid+1;
        } else {
            r=mid-1;
        }
    }

    return ans;
}

console.log(findSpecialInteger([1, 2, 3, 4, 5], 10));
console.log(findSpecialInteger([5, 17, 100, 11], 130));