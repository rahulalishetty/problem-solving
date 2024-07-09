var romanToInt = function(s) {
    const mapper = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let res = 0, prev, cur;

    for(const c of s) {
        cur = mapper[c];
        if(prev < cur) {
            res -= prev;
            cur -= prev;
        }
        res += cur;
        prev = cur;
    }

    return res;
};