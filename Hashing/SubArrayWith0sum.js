// Given an array of integers A, find and return whether the given array contains a non-empty subarray with a sum equal to 0.

// If the given array contains a sub-array with sum zero return 1, else return 0.

function subarrayZeroSum(A) {
    let cache={}, prefix=0;
    cache[0] = 1;
    for(let i=0;i<A.length;i++) {
        prefix += A[i];
        if(cache.hasOwnProperty(prefix)) {
            return 1;
        }
        cache[prefix] = 1;
    }
    return 0;
}

console.log(subarrayZeroSum([4,-1,1]));

// Given an array A of N integers.

// Find the largest continuous sequence in a array which sums to zero.

function largestContinuousSequence(A) {
    let cache = {"0": -1}, start = -1,end = -1,sum=0,maxLen=0;

    for (let i = 0; i < A.length; i++) {
        sum += A[i];

        if (cache.hasOwnProperty(sum)) {
            const len = i - cache[sum];
            if (len > maxLen) {
                start = cache[sum]+1;
                end = i+1;
                maxLen = len;
            }
        } else {
            cache[sum]= i;
        }
    }

    return A.slice(start,end);
}

console.log(largestContinuousSequence([1,2,-2,4,-4]));
console.log(largestContinuousSequence([-19,8,2,-8,19,5,-2,-23]));