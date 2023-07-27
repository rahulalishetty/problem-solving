// Given an array of positive integers A, two integers appear only once, 
// and all the other integers appear twice.
// Find the two integers that appear only once.

function singleNumber3(A) {
    const n = A.length;
    let xor = A.reduce((acc, a) => acc ^ a, 0), i;
    for(i=0;i<n;i++){
        if((xor & (1<<i)) > 0) break;
    }
    let xor1=0, xor2=0;
    for(let j=0;j<n;j++){
        if((A[j] & (1<<i)) > 0) xor1 ^= A[j];
        else xor2 ^= A[j];
    }
    return xor2 > xor1 ? [xor1, xor2] : [xor2, xor1];
}

console.log(singleNumber3([1, 2, 3, 1, 2, 4]));
console.log(singleNumber3([1, 2]));