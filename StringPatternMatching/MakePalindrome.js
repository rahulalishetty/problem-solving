const { computeLPS } = require("./LPSHelper");


function makePalindrome(A) {
    const n = A.length;
    const B = A.split("").reverse().join("");
    const P = A+"$"+B;
    const lps = computeLPS(P);

    return n-lps[P.length-1];
}

console.log(makePalindrome("abc"));
console.log(makePalindrome("bb"));