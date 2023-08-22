// Given an array of integers A of size N and an integer B.

// The College library has N books. The ith book has A[i] number of pages.

// You have to allocate books to B number of students so that the maximum number of pages allocated to a student is minimum.

// A book will be allocated to exactly one student.
// Each student has to be allocated at least one book.
// Allotment should be in contiguous order, for example: A student cannot be allocated book 1 and book 3, skipping book 2.
// Calculate and return that minimum possible number.

// NOTE: Return -1 if a valid assignment is not possible.

function allocateBooks(A,B) {
    const n = A.length;
    if(n < B) return -1;

    function isAllocationPossible(pages) {
        let currAlloc = 0, nStudents=1;
        for(let i=0;i<n;i++) {
            if(A[i] > pages) return false;
            if(currAlloc + A[i] > pages) {
                currAlloc = A[i];
                nStudents++;
                if(nStudents > B) return false;
            } else {
                currAlloc += A[i];
            }
        }

        return true;
    }

    let l=0,r=0,ans=-1;
    for(let i=0;i<n;i++) {
        r += A[i];
    }

    while(l<=r) {
        const mid = Math.floor((l+r)/2);
        // console.log(mid);
        if(isAllocationPossible(mid)) {
            r = mid-1;
            ans = mid;
        } else {
            l = mid+1;
        }
    }

    return ans;
}

console.log(allocateBooks([12, 34, 67, 90], 2));
console.log(allocateBooks([12, 15, 78], 4));