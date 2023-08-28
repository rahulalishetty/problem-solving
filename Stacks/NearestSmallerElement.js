// Given an array A, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

const Stack = require("./stack");

// More formally,

// G[i] for an element A[i] = an element A[j] such that

// j is maximum possible AND

// j < i AND

// A[j] < A[i]

// Elements for which no smaller element exist, consider the next smaller element as -1.

function nearestSmaller(A) {
    const n = A.length, stack=new Stack();
    const ans = [];
    ans.push(-1);
    stack.push(A[0]);

    for(let i=1;i<n;i++) {
        while(stack.top() >= A[i]) stack.pop();
        ans.push(stack.size() === 0 ? -1 : stack.top());
        stack.push(A[i]);
    }

    return ans;
}

console.log(nearestSmaller([4, 5, 2, 10, 8]));
console.log(nearestSmaller([3, 2, 1]));