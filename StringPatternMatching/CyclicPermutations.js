// Given two binary strings A and B, count how many cyclic shift of B when taken XOR with A give 0.
// NOTE: If there is a string, S0, S1, ... Sn-1 , then it is a cyclic shift is of the form Sk, Sk+1, ... Sn-1, S0, S1, ... Sk-1 where k can be any integer from 0 to N-1.

const { computeLPS } = require("./LPSHelper");

function cyclicPermutations(A,B) {
    const n = A.length;
    B += B;
    A += "$" + B;
    const L = A.length;
    const lps = computeLPS(A);
    let count = 0;

    for(let j=2*n+1;j<L;j++) {
        if(lps[j] === n) count++;
    }
    return count;
}

console.log(cyclicPermutations("1001", "0011"));
console.log(cyclicPermutations("111", "111"));