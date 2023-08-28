// Given an array of integers A.

// The value of an array is computed as the difference between the maximum element in the array and the minimum element in the array A.

// Calculate and return the sum of values of all possible subarrays of A modulo 109+7.

function nextSmallerLeft(A, SL, n) {
    let s = new Stack();
    for (let i = n - 1; i >= 0; i--) {
      while (!s.empty() && A[s.top()] > A[i]) {
        SL[s.top()] = i;
        s.pop();
      }
      s.push(i);
    }
    return;
}
  
function nextSmallerRight(A, SR, n) {
    let s = new Stack();
    while (!s.empty()) s.pop();
    for (let i = 0; i < n; i++) {
      while (!s.empty() && A[s.top()] >= A[i]) {
        SR[s.top()] = i;
        s.pop();
      }
      s.push(i);
    }
    return;
}
  
function nextGreaterLeft(A, GL, n) {
    let s = new Stack();
    while (!s.empty()) s.pop();
    for (let i = n - 1; i >= 0; i--) {
      while (!s.empty() && A[s.top()] < A[i]) {
        GL[s.top()] = i;
        s.pop();
      }
      s.push(i);
    }
    return;
}
  
function nextGreaterRight(A, GR, n) {
    let s = new Stack();
    while (!s.empty()) s.pop();
    for (let i = 0; i < n; i++) {
        while (!s.empty() && A[s.top()] <= A[i]) {
        GR[s.top()] = i;
        s.pop();
        }
        s.push(i);
    }
    return;
}

function maxAndMin(A) {
    let n = A.length;
    let a = [];
    for (let i = 0; i < n; i++) {
      a.push(A[i]);
    }
    let SL = new Array(n).fill(-1);
    let SR = new Array(n).fill(n);
    let GL = new Array(n).fill(-1);
    let GR = new Array(n).fill(n);
    nextSmallerLeft(A, SL, n);
    nextSmallerRight(A, SR, n);
    nextGreaterLeft(A, GL, n);
    nextGreaterRight(A, GR, n);

    let ans = 0;
    for (let i = 0; i < n; i++) {
      ans =
        (((ans - (((a[i] * ((SR[i] - i) * (i - SL[i]))) % mod) % mod)) % mod) +
          mod) %
        mod;
    }
    for (let i = 0; i < n; i++) {
      ans = (ans + (((a[i] * ((GR[i] - i) * (i - GL[i]))) % mod) % mod)) % mod;
    }
    return ans;
}