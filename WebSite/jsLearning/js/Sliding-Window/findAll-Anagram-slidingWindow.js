var findAnagrams = function (s, p) {
    let codeForA = 'a'.charCodeAt(0)
    let result = []
    let countForS = new Array(26).fill(0)
    let countForP = new Array(26).fill(0)

    for (let i of p) {
        let index = i.charCodeAt(0) - codeForA
        countForP[index] += 1
    }

    for (let i = 0; i < s.length; i++) {
        let index = s[i].charCodeAt(0) - codeForA
        countForS[index] += 1
        if (i > p.length - 1) {  // remove heads
            let index = s[i - p.length].charCodeAt(0) - codeForA
            countForS[index] -= 1
        }
        if (i >= p.length - 1) if (Anagram(countForS, countForP)) result.push(i - p.length + 1)   // anagram check
    }
    return result
};

let Anagram = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false
    for (let i = 0; i < arr1.length; i++) if (arr1[i] !== arr2[i]) return false
    return true
}


function SlidingAnagram(s, p) {
    let ans = []
    let charA = 'a'.charCodeAt(0)
    let countS = new Array(26).fill(0)
    let countP = new Array(26).fill(0)
    for (let i of p) {
        let index = i.charCodeAt(0) - charA
        countP[index] += 1
    }
    for (let i in s) {
        let index = s[i].charCodeAt(0) - charA
        countS[index] += 1
        if (i > p.length - 1) {
            let index = s[i - p.length].charCodeAt(0) - charA
            countS[index] -= 1
        }
        if (i >= p.length - 1) if (equal(countS, countP)) ans.push(i - p.length + 1)
    }
    return ans
}
let equal = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false
    for (let i in arr1) if (arr1[i] !== arr2[i]) return false
    return true
}

console.log(SlidingAnagram("cbaebabacd", "abc"));

console.log(findAnagrams("cbaebabacd","abc"));