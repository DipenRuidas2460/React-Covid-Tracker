// Backtracking (Recursion)

var longestPalindrome = (s) => {
    let max = [0, 1]
    for (let i = 0; i < s.length; i++) {
        let even = getDrome(i - 1, i, s);
        let odd = getDrome(i - 1, i + 1, s);
        let currMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
        max = max[1] - max[0] > currMax[1] - currMax[0] ? max : currMax;
    }
    return s.slice(max[0], max[1])
}

var getDrome = (l, r, s) => {
    while (l >= 0 && r < s.length) {
        if (s[l] !== s[r]) break;
        l--;
        r++;
    }
    return [l + 1, r]
}

console.log(longestPalindrome("babad"));