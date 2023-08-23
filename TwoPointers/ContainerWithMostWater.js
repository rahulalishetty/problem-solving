// Given n non-negative integers A[0], A[1], ..., A[n-1] , where each represents a point at coordinate (i, A[i]).

// N vertical lines are drawn such that the two endpoints of line i is at (i, A[i]) and (i, 0).

// Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container.

function containerWithMostWater(A) {
    let end = A.length - 1, start = 0;
    let maxVol = 0;
    while (start < end) {
        // finds the area for the current window
        maxVol = Math.max(maxVol, (end - start) * Math.min(A[start], A[end]));
        if (A[start] < A[end]) start++;
        else end--;
    }
    return maxVol;
}

console.log(containerWithMostWater([1, 5, 4, 3]));
console.log(containerWithMostWater([1]));