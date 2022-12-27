function isPalindrome(x) {
    let value = x.toString()
    let myRevStr = value.split("").reverse().join("")
    if (value == myRevStr) return true
    else return false
};

// console.log(isPalindrome(-121))

// Refactored Solution (Best Solution)

function isPalindrome1(s) {
    let str = `${s}`
    let start = 0;
    let end = str.length - 1;
    while (start < end) {
        if (str[start] !== str[end]) return false
        start++;
        end--
    }
    return true
}
// console.log(isPalindrome1(-1331))



function isPalindrome2(s, start, end) {
    if (start < end) {
        if (str[start] === str[end]) return isPalindrome(str, start + 1, end - 1)
        return false
    }
    return true
}
let checkPlin = (s) => {
    let str = `${s}`,l = 0, r = str.length - 1
    return isPalindrome1(str, l, r)
}
console.log(checkPlin(-1331))


function Palindrome(s) {
    let str = `${s}`
    if (str.length <= 1) return true
    if (str[0] == str.slice(str.length - 1)) return isPalindrome(str.slice(1, str.length - 1))
    return false

}
console.log(Palindrome(-121))


function isPlr(s) {
    let str = s.toString()
    if (str.length <= 1) return true
    return (str[0] == str[str.length - 1] && isPlr(str.slice(1, str.length - 1)))
}
console.log(isPlr(-11211))


function isPalin(x) {
    let s = `${x}`
    for (let i = 0; i < s.length/2; i++) if (s[i] !== s[s.length - i - 1]) return false
    return true
}

console.log(isPalin(-121));


function isPalindromeNum(x) {
    if (x < 0) return false
    let reverse = 0
    for (let i = x; i >= 1; i = Math.floor(i / 10)) reverse = (reverse * 10) + (i % 10)
    return reverse == x
}

// console.log(isPalindromeNum(-121));