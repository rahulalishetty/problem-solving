// You are given an array of integers A of size N.

// The value of a subarray is defined as BITWISE OR of all elements in it.

// Return the sum of value of all subarrays of A % 109 + 7.

const MOD = 1000000007;
function mult(a, b) {
    let val = a * b;
    if (val <= Number.MAX_SAFE_INTEGER && val >= Number.MIN_SAFE_INTEGER)
        return val % MOD;
    return Number((BigInt(a) * BigInt(b)) % BigInt(MOD));
}

function totalSubarrays(n){
    return (n * (n + 1)) / 2;
}

function subarrayOrSum(A) {
    let ans = 0;
    let n = A.length;
    for (let bit = 0; bit <= 27; bit++) {
        let zeroes = [];
        for (let i = 0; i < n; i++) {
            if ((A[i] & (1 << bit)) == 0) {
                if (i == 0 || (A[i - 1] & (1 << bit)) != 0) {
                    zeroes.push(0);
                }
                zeroes[zeroes.length - 1]++;
            }
        }
        let count = 0;
        // total number of subarray of an array of size n
        count += totalSubarrays(n);
        let sub = 0;
        zeroes.forEach((x) => {
            // subtract the total number of subarrays possible from x elements
            sub += totalSubarrays(x);
        });
        count -= sub;
        // add the contribution due to the current bit
        ans = (ans + mult(count, 1 << bit)) % MOD;
    }
    return ans;
}

console.log(subarrayOrSum([1,2,3,4,5]));
console.log(subarrayOrSum([7,8,9,10]));
