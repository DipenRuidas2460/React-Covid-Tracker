function solve(s, k) {
    let l = 0
    let r = 0
    let ans = 0
    let count = 0
    let charA = 'a'.charCodeAt(0)
    let arr = new Array(26).fill(0)
    while (r < s.length) {
        arr[s[r].charCodeAt(0) - charA]++
        if (arr[s[r].charCodeAt(0) - charA] == 1) count++;
        while (count > k) {
            arr[s[l].charCodeAt(0) - charA]--
            if (arr[s[l].charCodeAt(0) - charA] == 0) count--;
            l++;
        }
        ans += r - l + 1
        r++;
    }
    return ans
}

function subStrCount(s, k) {
    let res = solve(s, k) - solve(s, k - 1)     // exactly k = at most k - at most k-1
    return res
}
console.log("Exactly k distinct element:-");
console.log(subStrCount("abc", 2));   // 2
console.log(subStrCount("aa", 1));    // 3
console.log(subStrCount("aba", 2));   // 3
console.log(subStrCount("aaba", 2));  // 5
console.log(subStrCount("aabacbebebe", 3)); // 12
console.log("At most k distinct element:-", solve("abc", 2));