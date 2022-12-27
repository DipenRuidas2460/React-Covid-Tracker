var isPower = function (n) {
    if (n < 1) return false
    return ((Math.floor(Math.log2(n)) == Math.ceil(Math.log2(n))) ? true : false)

};
console.log(isPower(-2))


var isPowerOfTwo = function (n) {
    if (n < 1) return false
    while (n > 1 && (n & 1) == 0) {
        n >>= 1
    }
    return n == 1 ? true : false
};
console.log(isPowerOfTwo(-8))