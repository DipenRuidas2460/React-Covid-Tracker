function isPalindrome(s, l, r) {
    while (l < r) {
        if (s[l] !== s[r]) return false
        l++
        r--
    }
    return true
}

function partitioning(s) {
    let ans = []
    function findPalindrome(s, i, temp) {
        if (i === s.length) {
            ans.push(temp.slice())
            return
        }
        for (let j = i; j < s.length; j++) {
            if (isPalindrome(s, i, j)) {
                temp.push(s.slice(i, j + 1))
                findPalindrome(s, j + 1, temp)
                temp.pop()
            }
        }
    }
    findPalindrome(s, 0, [])
    return ans
}


console.log(partitioning("aba"));
console.log(partitioning("aab"));