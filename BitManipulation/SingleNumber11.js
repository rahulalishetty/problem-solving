// Given an array of integers, every element appears thrice except for one, which occurs once.

// Find that element that does not appear thrice.

// NOTE: Your algorithm should have a linear runtime complexity.

// Could you implement it without using extra memory?

function singleNumber(A){
    const n = A.length;
    let ans = 0;
    for(let i=0;i<32;i++){
        let count = 0;
        for(let j=0;j<n;j++){
            if((A[j] >> i) & 1) count++;
        }
        if(count % 3) ans = ans | (1 << i);
    }
    return ans;
}

console.log(singleNumber([1, 2, 4, 3, 3, 2, 2, 3, 1, 1]));
console.log(singleNumber([0, 0, 0, 1]));