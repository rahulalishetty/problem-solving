// Given an unsorted integer array A of size N.

// Find the length of the longest set of consecutive elements from array A.

function longestConsecutiveSequence(A) {
    const n = A.length, cache={};
    let ans=1;

    for(let i=0;i<n;i++) {
        const val = A[i];
        if(cache.hasOwnProperty(val)) continue;

        let count = 1, left=0, right=0;

        if(cache.hasOwnProperty(val-1)) {
            left = cache[val-1];
            cache[val-left] = left + 1;
        } 
        if(cache.hasOwnProperty(val+1)) {
            right = cache[val+1];
            cache[val+right] = right+1;
        }

        count += left+right;
        if(left && right) {
            cache[val-left] = count;
            cache[val+right] = count;
        }
        cache[val] = count;
        ans = Math.max(ans, count);
        // console.log(cache);
    }
    return ans;
}

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutiveSequence([1,1,2,2,3,3,4,4,5,5]));
console.log(longestConsecutiveSequence([6,4,5,2,3]));