// Given an array of integers A. There is a sliding window of size B, moving from the very left of the array to the very right. You can only see the B numbers in the window. Each time the sliding window moves rightwards by one position. You have to find the maximum for each window.

const Queue = require("./Queue");

// Return an array C, where C[i] is the maximum value in the array from A[i] to A[i+B-1].

// Refer to the given example for clarity.

// NOTE: If B > length of the array, return 1 element with the max of the array.

function slidingWindowMax(A,B) {
    const n = A.length, queue = new Queue();
    B = B > n ? n : B;
    let ans = [];

    for(let i=0;i<B;i++) {
        while(A[i] > queue.peek()) queue.dequeue();
        while(A[i] > queue.peekBack()) queue.dequeueBack();
        queue.enqueue(A[i]);
    }
    ans.push(queue.peek());

    for(let i=B;i<n;i++) {
        const element = A[i-B];
        if(element === queue.peek()) queue.dequeue();
        while(A[i] > queue.peek()) queue.dequeue();
        while(A[i] > queue.peekBack()) queue.dequeueBack();
        queue.enqueue(A[i]);
        // console.log(queue);
        ans.push(queue.peek());
    }

    return ans;
}

console.log(slidingWindowMax([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(slidingWindowMax([1, 2, 3, 4, 2, 7, 1, 3, 6], 6));
console.log(slidingWindowMax([648,614,490,138,657,544,745,582,738,229,775,
    665,876,448,4,81,807,578,712,951,867,328,308,440,542,178,637,446,882,
    760,354,523,935,277,158,698,536,165,892,327,574,516,36,705,900,482,558,937,207,368], 9));
console.log(slidingWindowMax([910,857,370,855,579,296,425,
    652,88,390,663,998,959,669,384,111,975,262,987,127,66,
    413,81,206,13,837,676,182,466,897,992,964,976,333], 4));
