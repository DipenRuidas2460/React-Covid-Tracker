// Method - 1

var isPalindrome = (s) => {
    if (s.length === 0) return true
    let i = 0
    let j = s.length - 1
    let reg = /[a-zA-Z0-9]/
    while (i < j) {
        while (!reg.test(s[i]) && i < s.length) i++;
        while (!reg.test(s[j]) && j > -1) j--;
        if ((s[i] || "").toLowerCase() !== (s[j] || "").toLowerCase()) return false;
        i++
        j--
    }
    return true
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));

// Method-2

var isPalin = (s) =>{
    s = s.toString()
    let str = s.replace(/[^a-zA-Z0-9]/gm,"").toLowerCase()
    for (let i = 0; i < Math.floor(str.length/2); i++) if(str[i] !== str[str.length-1-i]) return false
    return true
}
console.log(isPalin("A man, a plan, a canal: Panama"));
