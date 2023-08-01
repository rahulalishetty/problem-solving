// Given a string A, find the rank of the string amongst its permutations sorted lexicographically.

// Note that the characters might be repeated. If the characters are repeated, we need to look at the rank in unique permutations.

// Look at the example for more details.

// NOTE:

// The answer might not fit in an integer, so return your answer % 1000003 where 1000003 is a prime number.
// String A can consist of both lowercase and uppercase letters. Characters with lesser ASCII values are considered smaller, i.e., 'a' > 'Z'.

function sortedPermutationRankWithRepeats(s) {
    const mod = 1000003;
    function fac(n)
    {
        if (n == 0 || n == 1)
                return 1;
            return (n % mod * fac(n - 1) % mod) % mod;
    }
    n = s.length;

    let t_count = 1;

    for (let i = 0; i < n; i++)
    {
        let less_than = 0;
        for (let j = i + 1; j < n; j++) {
            if (s[i] > s[j]) {
                less_than += 1;
            }
        }

        let d_count = new Array(52);
        for(let i=0;i<52;i++)
            d_count[i]=0;

        for (let j = i; j < n; j++)
        {
            if ((s[j] >= 'A') && s[j] <= 'Z')
                d_count[s[j].charCodeAt(0) - 'A'.charCodeAt(0)] += 1;
            else
                d_count[s[j].charCodeAt(0) - 'a'.charCodeAt(0) + 26] += 1;
        }

        let d_fac = 1;
        for (let ele=0;ele< d_count.length;ele++)
            d_fac = (d_fac % mod * fac(d_count[ele]) % mod) % mod;
        t_count += Math.floor((fac(n - i - 1) * less_than) / d_fac);
    }
    return t_count;
}

console.log(sortedPermutationRankWithRepeats("aba"));