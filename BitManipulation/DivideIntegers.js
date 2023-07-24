// Divide two integers without using multiplication, division and mod operator.

// Return the floor of the result of the division.

// Also, consider if there can be overflow cases i.e output is greater than INT_MAX, return INT_MAX.

// NOTE: INT_MAX = 2^31 - 1

// -2^31 <= A, B <= 2^31-1

// B != 0

function divideInteger(a, b) {
    let n = a, m = b;
        let MAX = 2147483647, MIN = -2147483648;
        let sign = (n < 0 && m >= 0) || (n >= 0 && m < 0) ? -1 : 1;
        n = Math.abs(n), m = Math.abs(m);
        let q = 0;
        let mask = 1;
        for(let i = 1; i <= 31; i++){
            mask *= 2;
        }
        for (let t = 0, i = 31; i >= 0; i--){
            if (t + m * mask <= n){
                t += m * mask, q += mask;
            }
            mask /= 2;
        }
        if (sign < 0){
            q = -q;
        }
        return q >= MAX || q < MIN ? MAX : q;
}

console.log(divideInteger(5, 2));
console.log(divideInteger(7, 1));
