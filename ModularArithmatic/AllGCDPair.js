// Given an array of integers A of size N containing GCD of every possible pair of elements of another array.
// Find and return the original numbers used to calculate the GCD array in any order. For example,
// if original numbers are {2, 8, 10} then the given array will be {2, 2, 2, 2, 8, 2, 2, 2, 10}.

function gcd(a,b) {
    if(b>a) return gcd(b,a);
    if(b === 0) return a;
    return gcd(b,a%b);
}

function allGCDPair(A) {
    A.sort((a, b) => -a + b);
    let cur = [];
    let mp = new Map();
    // mp stores the count of A[i]'s that are to be deleted from the array
    A.forEach((ele) => {
        if(mp.get(ele) != undefined && mp.get(ele) > 0){
            mp.set(ele, mp.get(ele) - 1);
        }
        else{
            cur.forEach((pre) => {
                let now = gcd(pre, ele);
                if(mp.get(now) != undefined){
                    mp.set(now, mp.get(now) + 2);
                }
                else{
                    mp.set(now, 2);
                }
                // we are adding 2 to the mp as there will 2 pairs gcd(pre, ele) and gcd(ele, pre)
            });
            cur.push(ele);
        }
    });
    return cur;
}

console.log(allGCDPair([2, 2, 2, 2, 8, 2, 2, 2, 10]));
console.log(allGCDPair([5, 5, 5, 15]));