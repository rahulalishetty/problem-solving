// Given an integer array A of size N. You have to delete one element such that the 
// GCD(Greatest common divisor) of the remaining array is maximum.

// Find the maximum value of GCD.

function gcd(a,b) {
    if(b>a) return gcd(b,a);
    if(b === 0) return a;
    return gcd(b,a%b);
}

function deleteOne(A) {
    const n = A.length;
        let Prefix = new Array(n + 2);
        let Suffix = new Array(n + 2);

        Prefix[1] = A[0];
        for(let i = 2; i <= n; i += 1)
        {
            Prefix[i] = gcd(Prefix[i - 1], A[i - 1]);
        }
        Suffix[n] = A[n - 1];
        for(let i = n - 1; i >= 1; i -= 1)
        {
            Suffix[i] = gcd(Suffix[i + 1], A[i - 1]);
        }
        let ans = Math.max(Suffix[2], Prefix[n - 1]);
        for(let i = 2; i < n; i += 1)
        {
            ans = Math.max(ans, gcd(Prefix[i - 1],
                                    Suffix[i + 1]));
        }
        return ans;
}

console.log(deleteOne([12,15,18]));
console.log(deleteOne([5,15,30]));