// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

function isPalindrome(x) {
    if(x < 0) return false;
    if(x === 0) return true;

    let temp_x = x, nums = [], mul = 10;

    while(temp_x) {
        nums.push(temp_x % 10);
        temp_x = Math.floor(temp_x / mul);
    }

    const l = nums.length;
    const half = Math.floor(l / 2);

    for(let i=0;i<half;i++) {
        if(nums[i] !== nums[l-1-i]) return false
    }
    return true;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

function isPalindromeWithConstantMemory(x) {
    if(x < 0 || (x % 10 == 0 && x != 0)) return false;

    let revNum = 0;
    while(x > revNum) {
        revNum = revNum * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    return x === revNum || x == Math.floor(revNum / 10);
}

console.log(isPalindromeWithConstantMemory(121));
console.log(isPalindromeWithConstantMemory(-121));
console.log(isPalindromeWithConstantMemory(10));


