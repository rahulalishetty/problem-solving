// Given an even number A ( greater than 2 ), return two prime numbers whose sum will be equal to the given number.

// If there is more than one solution possible, return the lexicographically smaller solution.

// If [a, b] is one solution with a <= b, and [c,d] is another solution with c <= d, then 
// [a, b] < [c, d], If a < c OR a==c AND b < d. 

function sieve(n) {
    const isPrime = new Array(n+1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for(let p=2;p<=n;p++) {
        if(isPrime[p]) {
            for(let i=p*p;i<=n;i += p) {
                isPrime[i] = false; 
            }
        }
    }
    return isPrime;
}

function primeSum(n) {
    let isPrime = sieve(n);

    for(let i=2;i<n;i++) {
        if(isPrime[i] && isPrime[n-i]) {
            return [i, n-i];
        }
    }
}

console.log(primeSum(4));