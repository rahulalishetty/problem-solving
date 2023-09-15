// You are the trainer of a gym and there are A people who come to your gym.

// Some of them are friends because they walk together, and some of them are friends because they talk together.
// But people become possessive about each other, so a person cannot walk with one friend and talk with another. Although he can walk with two or more people or talk with two or more people.

// You being the trainer, decided to suggest each one of the 2 possible diets. But friends, being friends will always have the same diet as all the other friends are having.

// Find and return the number of ways you can suggest each of them a diet.

// As the number of ways can be huge, return the answer modulo 109+7.

// NOTE: If there is any person who walks with one person and talks with the another person, then you may return 0.

function totalWays(A, B, C){
    const n = B.length, m = C.length, parent=[...Array(A+1)].map((e, i) => i), 
    mod = 1e9+7, set = new Set();

    function getRoot(x) {
        if(x === parent[x]) return x;
        const p = getRoot(parent[x]);
        parent[x] = p;
        return p;
    }

    function union(x, y) {
        const a = getRoot(x);
        const b = getRoot(y);
        if(a !== b) parent[a] = b;
    }

    for(let i=0;i<n;i++) {
        union(B[i][0], B[i][1]);
        set.add(B[i][0]);
        set.add(B[i][1]);
    }

    for(let i=0;i<m;i++) {
        union(C[i][0], C[i][1]);
        if(set.has(C[i][0]) || set.has(C[i][1])) return 0;
    }

    let count = 0, totalWays = 1;
    for(let i=1;i<=A;i++) {
        if(i === parent[i]) count++; 
    }

    while(count--) {
        totalWays = (totalWays * 2) % mod;
    }

    return totalWays;
}