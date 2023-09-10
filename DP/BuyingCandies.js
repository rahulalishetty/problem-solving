// Rishik likes candies a lot. So, he went to a candy-shop to buy candies.

// The shopkeeper showed him N packets each containg A[i] candies for cost of C[i] nibbles, each candy in that packet has a sweetness B[i]. The shopkeeper puts the condition that Rishik can buy as many complete candy-packets as he wants but he can't buy a part of the packet.

// Rishik has D nibbles, can you tell him the maximum amount of sweetness he can get from candy-packets he will buy?

function buyingCandies(A,B,C,D) {
    const n = A.length, dp = [...Array(n)].map(e => Array(D+1).fill(-1));

    function selectItems(i, amount) {
        if(i < 0 || amount === 0) return 0;
        if(dp[i][amount] !== -1) return dp[i][amount];

        let sweetness = selectItems(i-1, amount);
        if(C[i] <= amount) {
            sweetness = Math.max(sweetness, selectItems(i, amount - C[i]) + (A[i] * B[i]));
        }
        
        return dp[i][amount] = sweetness;
    }

    return selectItems(n-1, D);
}

function buyingCandiesIterative(A,B,C,D) {
    const n = A.length, dp=Array(D+1).fill(0);

    for(let amount=1;amount<=D;amount++) {
        for(let i=0;i<n;i++) {
            if(C[i] <= amount) {
                dp[amount] = Math.max(dp[amount], dp[amount - C[i]] + A[i] * B[i]); 
            }
        }
    }

    return dp[D];
}

console.log(buyingCandies(
    [1, 2, 3],
    [2, 2, 10],
    [2, 3, 9],
    8
));