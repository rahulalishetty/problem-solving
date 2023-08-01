// Given three integers A, B, and C, where A represents n, B represents r, and C represents p and p is a prime number greater than equal to n, find and return the value of nCr % p where nCr % p = (n! / ((n-r)! * r!)) % p.

// x! means factorial of x i.e. x! = 1 * 2 * 3... * x.

// NOTE: For this problem, we are considering 1 as a prime.

const maxn = 1000010;
let MOD = 1e9 + 7;

let fact = new Array(maxn).fill(0);

function mult(a, b) {
    let val = a * b;
    if (val <= Number.MAX_SAFE_INTEGER && val >= Number.MIN_SAFE_INTEGER)
        return val % MOD;
    return Number((BigInt(a) * BigInt(b)) % BigInt(MOD));
}

function pw(a, b, m) {
    let res = 1;
    while (b > 0) {
        if (b & 1) 
            res = mult(res, a);
        a = mult(a, a);
        b >>= 1;
    }
    return res;
}

function precompute(A) {
    fact[0] = 1;
    for (let i = 1; i <= A; i++) 
        fact[i] = mult(i, fact[i - 1]);
}

function inverse(val) {
    return pw(val, MOD - 2, MOD);
}

function ncr(n, r) {
    if (r > n) 
        return 0;
    // nCr = fact[n] * inverse(fact[n - r]) * inverse(fact[r])
    return mult(fact[n], mult(inverse(fact[n - r]), inverse(fact[r])));
}

function ncrModPrime(A,B,C) {
    MOD = C;
    precompute(A);
    return ncr(A, B);
}

console.log(ncrModPrime(5,2,13));
console.log(ncrModPrime(6,2,13));