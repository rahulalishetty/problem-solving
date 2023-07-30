// Given two Integers A, B. You have to calculate (A ^ (B!)) % (1e9 + 7).

// "^" means power,
// "%" means mod, and
// "!" means factorial.

function veryLargePower(A, B) {
    const mod = 1e9+7;
    const fact = (function rec(k) {
        if(k===1) return 1;
        return ((k%(mod-1)) * (rec(k-1) % (mod-1))) % (mod-1);
    })(B);
    const power = function(x, y, p){
        let res = 1;
        x = x % p;
    
        if (x == 0)
            return 0;
    
        while (y > 0){
            if (y & 1)
                res = (res * x) % p;

            y = y >> 1;
            x = (x * x) % p;
        }
        return res;
    }
    return power(A, fact, mod);
}

console.log(veryLargePower(2,2));