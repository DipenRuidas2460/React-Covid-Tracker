function minimumWindowStr(s, t) {
    if ((s.length === 0) || (s.length < t.length)) return `""`
    let map = new Map()
    for (let i of t) map.set(i, (map.get(i) || 0) + 1);
    let l = 0
    let r = 0
    let count = 0
    let char = 0
    let minLen = s.length + 1
    while (r < s.length) {
        if (map.has(s[r])) {
            map.set(s[r], map.get(s[r]) - 1);
            if (map.get(s[r]) >= 0) count++;
        }
        while (count === t.length) {
            if (minLen > r - l + 1) {
                minLen = r - l + 1;
                char = l;
            }
            if (map.has(s[l])) {
                map.set(s[l], map.get(s[l]) + 1);
                if (map.get(s[l]) > 0) count--;
            }
            l++;
        }
        r++;
    }
    return (minLen > s.length) ? `""` : s.substring(char, char + minLen)
}

// let arr = [1,3,1,1,2,2,3,4]
// let obj = {}
// for(let i of arr) obj[i] = (obj[i]||0)?(obj[i]+1):1
// console.log(obj);


var minWindow = function (s, t) {
    if (s.length === 0 || s.length < t.length) return `""`
    let map = new Map()
    for (let i of t) map.set(i, (map.get(i) || 0) + 1)
    let count = 0
    let start = 0
    let char = 0
    let minLen = s.length + 1
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) - 1);
            if (map.get(s[i]) >= 0) count++;
        }
        while (count === t.length) {
            if (minLen > i - start + 1) {
                minLen = i - start + 1;
                char = start;
            }
            if (map.has(s[start])) {
                map.set(s[start], map.get(s[start]) + 1);
                if (map.get(s[start]) > 0) count--;
            }
            start++;
        }
    }
    return (minLen > s.length) ? `""` : s.substring(char, char + minLen);
};

console.log(minimumWindowStr("ADOBECODEBANC", "ABC"));
console.log(minWindow("ADOBECODEBANC", "ABE"));
console.log(minWindow("abcd", "aa"));