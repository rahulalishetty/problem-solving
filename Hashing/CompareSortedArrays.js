// Given an array A of length N. You have to answer Q queries.

// Each query will contain four integers l1, r1, l2, and r2. If sorted segment from [l1, r1] is the same as the sorted segment from [l2 r2], then the answer is 1 else 0.

// NOTE The queries are 0-indexed.

function compareSortedArrays(A, B) {
    const hashValGenerator=()=>{
        return BigInt(Math.floor(Math.random() * 1000000000001))
    }

    //create a hashmap for each value in A
    let m = new Map();
    for(let i=0; i<A.length; i++){
        if(!m.has(A[i])){
            m.set(A[i], hashValGenerator());
        }
    }

    //calculate prefix sum array  of A using hashmap values
    let pfsum=[m.get(A[0])];
    for(let i=1; i<A.length;i++){
        pfsum[i] = pfsum[i-1] + m.get(A[i]);
    }

    // create an array for Ans , initially fill it with zeros
    let ans = Array(B.length).fill(0);

    //Iterating over each query
    for(let i=0; i<B.length; i++){
        let l1 = B[i][0], r1 = B[i][1], l2 = B[i][2], r2 = B[i][3];
        //checking if the length of sub array is same
        if(r1-l1 === r2-l2){
            // if length is same calculate sum on the basis of pfsum array
            let sum1 = pfsum[r1] - (l1 > 0 ? pfsum[l1 - 1] : 0n);
            let sum2 = pfsum[r2] - (l2 > 0 ? pfsum[l2 - 1] : 0n);

            //if sums are equal update the values in ans array
            if(sum1===sum2) ans[i] = 1;
        }
    }

    //returning the final ans array
    return ans;
}

console.log(compareSortedArrays([1, 7, 11, 8, 11, 7, 1], [ 
    [0, 2, 4, 6]
]));

console.log(compareSortedArrays([1, 3, 2], [
    [0, 1, 1, 2]
]));