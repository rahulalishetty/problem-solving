function computeLPS(pattern) {
    if(pattern instanceof String) {
        pattern = pattern.split("");
    }
    const n = pattern.length, lps = Array(n);
    let l=0;
    lps[0] = 0;

    for(let i=1;i<n;i++) {
        while(l > 0 && pattern[i] !== pattern[l]) {
            l = lps[l-1];
        }
        if(pattern[i] === pattern[l]) {
            l++;
        }
        lps[i] = l;
    }
    return lps;
}

module.exports = {
    computeLPS
}