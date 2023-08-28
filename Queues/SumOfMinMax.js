// Given an array A of both positive and negative integers.

const Queue = require("./Queue");

// Your task is to compute the sum of minimum and maximum elements of all sub-array of size B.

// NOTE: Since the answer can be very large, you are required to return the sum modulo 109 + 7.

function sumOfMinMax(A, B) {
    const n = A.length, minQueue = new Queue(), maxQueue = new Queue();
    const mod = 1e9+7;
    let sum=0;
    for(let i=0;i<B;i++) {
        while(A[i] > maxQueue.peek()) maxQueue.dequeue();
        while(A[i] > maxQueue.peekBack()) maxQueue.dequeueBack();

        while(A[i] < minQueue.peek()) minQueue.dequeue();
        while(A[i] < minQueue.peekBack()) minQueue.dequeueBack();

        maxQueue.enqueue(A[i]);
        minQueue.enqueue(A[i]);
    }

    sum = maxQueue.peek() + minQueue.peek();

    for(let i=B;i<n;i++) {
        const element = A[i-B];
        
        if(element === minQueue.peek()) minQueue.dequeue();
        if(element === maxQueue.peek()) maxQueue.dequeue();

        while(A[i] > maxQueue.peek()) maxQueue.dequeue();
        while(A[i] > maxQueue.peekBack()) maxQueue.dequeueBack();

        while(A[i] < minQueue.peek()) minQueue.dequeue();
        while(A[i] < minQueue.peekBack()) minQueue.dequeueBack();
        maxQueue.enqueue(A[i]);
        minQueue.enqueue(A[i]);
        // console.log(queue);
        sum = (sum + (maxQueue.peek() + minQueue.peek()) % mod) % mod;
    }
    sum += mod;
    sum %=mod;
    return sum;
}

console.log(sumOfMinMax([2, 5, -1, 7, -3, -1, -2], 4));
console.log(sumOfMinMax([2, -1, 3], 2));