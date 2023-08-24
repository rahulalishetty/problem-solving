// Given a string A consisting of lowercase characters.

// Check if characters of the given string can be rearranged to form a palindrome.

// Return 1 if it is possible to rearrange the characters of the string A such that it becomes a palindrome else return 0.

function checkPallindromePossible(A) {
    const cache = new Set(), val = A.split("");

    val.forEach(char => {
        if(cache.has(char)) cache.delete(char);
        else cache.add(char);
    });

    return cache.size > 1 ? 0 : 1;
}

console.log(checkPallindromePossible("abcde"));
console.log(checkPallindromePossible("abbaee"));