var reverseString = function (s) {
    for (let i = 0; i < (s.length - 1) / 2; i++) { 
        [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]] 
    }
    return s.join("")
}

console.log(reverseString(["h", "e", "l", "l", "o"]));