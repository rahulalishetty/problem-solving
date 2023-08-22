// You are given three positive integers, A, B, and C.

// Any positive integer is magical if divisible by either B or C.

// Return the Ath smallest magical number. Since the answer may be very large, return modulo 109 + 7.

// Note: Ensure to prevent integer overflow while calculating.

function AthMagicalNumber(A,B,C) {
    let l=1, r=A*Math.min(B,C), ans;
    const lcm = (B*C) / gcd(B,C);

    function gcd(a,b) {
        if(b > a) return gcd(b, a);
        if(b === 0) return a;
        return gcd(b, a%b); 
    }

    while(l<=r) {
        const mid = (l+r) >> 1;
        const rank = Math.floor(mid/B) + Math.floor(mid/C) - Math.floor(mid/lcm);
        if(rank >= A) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return ans;
}

console.log(AthMagicalNumber(1, 2, 3));
console.log(AthMagicalNumber(4, 2, 3));