var countGoodSubstrings = function (s) {
    let count = 0
    if (s.length - 1 <= 1) return 0
    for (let i = 0; i < s.length - 2; i++) {
        if (s[i] == s[i + 1] || s[i + 1] == s[i + 2] || s[i + 2] == s[i]) continue
        count++
    }
    return count
}

console.log(countGoodSubstrings("aababcabc"));