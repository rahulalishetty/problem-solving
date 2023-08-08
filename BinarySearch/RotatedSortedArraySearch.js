// Given a sorted array of integers A of size N and an integer B, 
// where array A is rotated at some pivot unknown beforehand.

// For example, the array [0, 1, 2, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2].

// Your task is to search for the target value B in the array. If found, return its index; otherwise, return -1.

// You can assume that no duplicates exist in the array.

// NOTE: You are expected to solve this problem with a time complexity of O(log(N)).


function rotatedSortedArraySearch(nums, target) {
    const binarySearch = (nums) => {
        const n = nums.length;
        let l=0,r=n-1;
        while(l<=r) {
            let mid = Math.floor((l+r)/2);

            if(nums[mid] < target) {
                l = mid + 1;
            } else if(nums[mid] > target) {
                r = mid - 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
    const n = nums.length;
    let l=0, r=n-1, end=n-1;
    while(l < r) {
        let mid = Math.floor((l+r)/2);

        if(nums[mid] > nums[end]) {
            l = mid+1;
        } else {
            r = mid;
        }
    }
    let min = l, ind = -1;
    if(target > nums[end]) {
        ind = binarySearch(nums.slice(0, min));
    } else {
        ind = binarySearch(nums.slice(min));
        if(ind > -1) ind += min;
    }
    return ind;
}

// console.log(rotatedSortedArraySearch([4, 5, 6, 7, 0, 1, 2, 3], 4));
// console.log(rotatedSortedArraySearch([9, 10, 3, 5, 6, 8], 5));
console.log(rotatedSortedArraySearch([ 19, 20, 21, 22, 28, 29, 32, 36, 39, 40, 41, 42, 43, 45, 48, 49, 51, 54, 55, 56, 
    58, 60, 61, 62, 65, 67, 69, 71, 72, 74, 75, 78, 81, 84, 85, 87, 89, 92, 94, 95, 96, 97, 98, 99, 100, 105, 107, 108, 
    109, 110, 112, 113, 115, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 128, 130, 131, 133, 134, 135, 136, 137, 
    138, 139, 141, 142, 144, 146, 147, 148, 149, 150, 153, 155, 157, 159, 161, 163, 164, 169, 170, 175, 176, 179, 180, 
    185, 187, 188, 189, 192, 196, 199, 201, 203, 205, 3, 7, 9, 10, 12, 13, 17 ], 6));