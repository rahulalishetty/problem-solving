// Given a knapsack weight A and a set of items with certain value B[i] and weight C[i], we need to calculate maximum amount that could fit in this quantity.

// This is different from classical Knapsack problem, here we are allowed to use unlimited number of instances of an item.

function unboundKnapsack(A,B,C) {
    const n = B.length, dp=[...Array(n)].map(e => Array(A+1).fill(-1));

    function selectItems(i, weight) {
        if(i<0||weight === 0) return 0;
        if(dp[i][weight] !== -1) return dp[i][weight];
        
        let val = 0;
        
        if(C[i] <= weight) {
            val = Math.max(val, selectItems(i, weight-C[i])+B[i]);
        }

        val = Math.max(selectItems(i-1, weight), val);

        return dp[i][weight]=val;
    }

    return selectItems(n-1, A);
}

function unboundKnapsackIterative(A,B,C) {
    let W = A;
    let dp = new Array(W + 1).fill(0);
    for (let i = 0; i <= W; i++)
        for (let j = 0; j < B.length; j++)
            if (C[j] <= i)
                dp[i] = Math.max(dp[i], dp[i - C[j]] + B[j]);
    return dp[W];
}

console.log(unboundKnapsack(10, [5], [10]));
console.log(unboundKnapsack(10, [6,7], [5,5]));