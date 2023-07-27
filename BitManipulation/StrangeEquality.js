// iven an integer A.
// Two numbers, X and Y, are defined as follows:

// X is the greatest number smaller than A such that the XOR sum of X and A is the same as the sum of X and A.
// Y is the smallest number greater than A, such that the XOR sum of Y and A is the same as the sum of Y and A.
// Find and return the XOR of X and Y.

function strageEquality(A){
    let maxBit = parseInt(Math.log(A) / Math.log(2), 10) + 1;
    let ans = 1 << maxBit;
    for(let i=maxBit-1;i>=0;i--){
        if((A & (1 << i)) === 0) ans ^= 1 << i;
    }
    return ans;
}

console.log(strageEquality(5));