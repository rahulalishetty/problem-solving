// You are given a 0-indexed 2D integer array flowers, where flowers[i] = [starti, endi] means the ith flower will be in 
// full bloom from starti to endi (inclusive). You are also given a 0-indexed integer array people of size n, where people[i] 
// is the time that the ith person will arrive to see the flowers.

// Return an integer array answer of size n, where answer[i] is the number of flowers that are in full bloom when the ith person arrives.


const PriorityQueue = require('../Queues/PriorityQueue');

function findFullBloomFlowersCount(flowers, people) { // priorityQueue Approach
    const sortedPeople = [...people];
    sortedPeople.sort((a,b) => a-b);
    flowers.sort((a,b) => {
        if(a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });
    const pq = new PriorityQueue((a,b) => a<b), cache = {}, ans = [];
    let i=0;

    for(const person of people) {
        while(i<flowers.length && flowers[i][0] <= person) {
            pq.enqueue(flowers[i][1]);
            i++;
        }

        while(!pq.empty() && pq.peek() < person) {
            pq.dequeue();
        }

        cache[person] = pq.size();
    }

    for(const person of people) {
        ans.push(cache[person]);
    }

    return ans;
}

function binarySearchSolution(flowers, people) {
    const n = flowers.length;
    const s = new Array(n);
    const e = new Array(n);

    function binarySearch(A, target) {
        let l = 0;
        let r = A.length;
        let mid;

        while (l < r) {
            mid = Math.floor((l + r) / 2);
            if (target < A[mid]) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }

        return l;
    }

    for (let i = 0; i < n; i++) {
        s[i] = flowers[i][0];
        e[i] = flowers[i][1];
    }

    s.sort((a, b) => a - b);
    e.sort((a, b) => a - b);

    const ans = new Array(people.length);
    let ei, si;

    for (let i = 0; i < people.length; i++) {
        ei = binarySearch(e, people[i]);
        si = binarySearch(s, people[i]);
        ans[i] = si - ei;
    }

    return ans;
}

console.log(findFullBloomFlowersCount([[1,6],[3,7],[9,12],[4,13]], [2,3,7,11]));
console.log(findFullBloomFlowersCount([[1,10],[3,3]], [3,3,2]));