var longestPalindrome = (s) => {
    let map = new Map()
    let ans = 0
    let isFirstOdd = false
    for (let i of s) map.set(i, (map.get(i) || 0) + 1)
    for (let key of map) {
        if (key[1] % 2 === 0) ans += key[1];
        else {
            if (isFirstOdd === false) {
                ans += key[1];
                isFirstOdd = true;
            } else ans += (key[1] - 1);
        }
    }
    return ans;
}


var longestPalindrome1 = (s) => {
    let ans = 0
    let isFirstOdd = false
    let lowerCase = new Array(26).fill(0)
    let upperCase = new Array(26).fill(0)
    for (let i of s) {
        let low = i.charCodeAt(0) - "a".charCodeAt(0)
        let up = i.charCodeAt(0) - "A".charCodeAt(0)
        if (low >= 0) lowerCase[low]++
        else upperCase[up]++
    }
    for (let i = 0; i < 26; i++) {
        if (lowerCase[i] % 2 === 0) ans += lowerCase[i];
        else {
            if (isFirstOdd === false) {
                ans += lowerCase[i];
                isFirstOdd = true;
            } else ans += lowerCase[i] - 1;
        }
    }
    for (let i = 0; i < 26; i++) {
        if (upperCase[i] % 2 === 0) ans += upperCase[i];
        else {
            if (isFirstOdd === false) {
                ans += upperCase[i];
                isFirstOdd = true;
            } else ans += upperCase[i] - 1;
        }
    }
    return ans;
}

console.log(longestPalindrome1("AbbbbbcccddA"));

console.log(longestPalindrome("abbbbbcccdda"));