// Given an array A. For every pair of indices i and j (i != j), find the maximum A[i] & A[j].


function maxAndPair(A){
    A = A.map(a => Number(a));
    const n = A.length;
    let ans = 0;
    for(let i=31;i>=0;i--){
        let count = 0;
        for(let j=0;j<n;j++){
            if((A[j] & (1<<i)) > 0) count++;
        }
        if(count >= 2) {
            ans = ans | (1 << i);
            for(let j=0;j<n;j++){
                if((A[j] & (1<<i)) === 0) A[j] = 0;
            }
        }
    }
    return ans;
}

console.log(maxAndPair([53, 39, 88]));
console.log(maxAndPair([38, 44, 84, 12]));