// Given an integer array A of size N. Find the contiguous subarray within the given array (containing at least one number) which has the largest product.

// Return an integer corresponding to the maximum product possible.

// NOTE: Answer will fit in 32-bit integer value.

function maxProdcutSubarray(A) {
    const n = A.length;
    let maxSoFar = A[0], minSoFar = A[0], result=A[0];

    for(let i=1;i<n;i++) {
        const cur = A[i];
        let tempMax;
        tempMax = Math.max(cur, maxSoFar*cur, minSoFar*cur);
        minSoFar = Math.min(cur, minSoFar*cur, maxSoFar*cur);
        
        maxSoFar = tempMax;
        result = Math.max(result, maxSoFar);
    }

    return result;
}