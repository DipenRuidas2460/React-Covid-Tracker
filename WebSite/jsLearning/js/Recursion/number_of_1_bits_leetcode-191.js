var hammingWeight = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return hammingWeight(n & (n - 1)) + 1
}

console.log(hammingWeight("11111111111111111111111111111101"));