function isPowerOfTwo(n) {
    if (n < 1) return false
    while (n > 1) {
        if (n % 2 !== 0) return false
        n = n / 2
    }
    return true
}


console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(24));

// Time Complexity: O(logn)


// optimized solution using bitwise operation : power of two 

function isPowerOfTwoBitWise(n) {
    if (n < 1) return false;
    return (n & (n - 1)) === 0
}

// Time Complexity: O(1)