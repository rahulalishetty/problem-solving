// Given two integer arrays A and B of size N each which represent values and weights associated with N items respectively.

// Also given an integer C which represents knapsack capacity.

// Find out the maximum total value that we can fit in the knapsack. If the maximum total value is ans, then return ⌊ans × 100⌋ , i.e., floor of (ans × 100).

// NOTE:

// You can break an item for maximizing the total value of the knapsack

function fractionalKnapsack(A,B,C) {
    const n = A.length, sorted = [...Array(n)].map(e => Array(2));

    for(let i=0;i<n;i++) {
        sorted[i] = [A[i], B[i]];
    }

    sorted.sort((a,b) => {
        return (b[0]/b[1]) - (a[0]/a[1]);
    });
    let res = 0;
    for(let i=0;i<n;i++) {
        if(C - sorted[i][1] >= 0) {
            C -= sorted[i][1];
            res += sorted[i][0];
        } else {
            res += (sorted[i][0]/sorted[i][1]) * C;
            break;
        }
    }

    return Math.floor((res * 1000)/10);
}

console.log(fractionalKnapsack([60, 100, 120], [10, 20, 30], 50));
console.log(fractionalKnapsack([3], [20], 17));