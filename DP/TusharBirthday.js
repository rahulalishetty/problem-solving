// As it is Tushar's Birthday on March 1st, he decided to throw a party to all his friends at TGI Fridays in Pune. Given are the eating capacity of each friend, filling capacity of each dish and cost of each dish. A friend is satisfied if the sum of the filling capacity of dishes he ate is equal to his capacity. Find the minimum cost such that all of Tushar's friends are satisfied (reached their eating capacity).

// NOTE:

// Each dish is supposed to be eaten by only one person. Sharing is not allowed.

// Each friend can take any dish unlimited number of times.

// There always exists a dish with filling capacity 1 so that a solution always exists.

function tusharBirthdayCost(A,B,C) {
    const n = A.length, maxCapacity = A.reduce((acc, capacity) => Math.max(capacity, acc), 0);
    const dp = Array(maxCapacity+1).fill(Infinity);
    dp[0] = 0;

    for(let capacity=1;capacity<=maxCapacity;capacity++) {
        for(let i=0;i<B.length;i++) {
            if(B[i] <= capacity) {
                dp[capacity] = Math.min(dp[capacity], dp[capacity - B[i]] + C[i]);
            }
        }
    }

    let totalCost = 0;
    for(let i=0;i<n;i++) {
        totalCost += dp[A[i]];
    }
    return totalCost;
}