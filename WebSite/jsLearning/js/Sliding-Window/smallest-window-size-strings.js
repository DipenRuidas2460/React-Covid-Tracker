function smallestWindow(s) {
    let map = new Map()
    let set = new Set()
    for (let k of s) set.add(k)
    let i = 0
    let j = 0
    let minLeft = 0
    let ans = s.length + 1
    while (i < s.length) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
        if (map.size == set.size) {
            while (map.get(s[j]) > 1) {
                map.set(s[j], map.get(s[j]) - 1)
                j++;
            }
            ans = Math.min(ans, i - j + 1)
            minLeft = j
        }
        i++;
    }
    return `Substring:-${s.substring(minLeft, minLeft + ans)},------ Smallest Window size:-${ans}`
}


console.log(smallestWindow("aabbcc"));   // 4
console.log(smallestWindow("aab"));     // 2
console.log(smallestWindow("abcdef"));  // 6
console.log(smallestWindow("aaaaaaaaaaaaaaaaaaaaaaaaa"));  // 1