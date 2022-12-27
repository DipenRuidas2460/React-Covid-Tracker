// Method - 1
var longestNiceSubstring = function (s) {
    if (s.length < 2) return "";
    const obj = {};
    for (let i of s) obj[i] = i;
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i].toUpperCase()] && obj[s[i].toLowerCase()]) continue;
        const prev = longestNiceSubstring(s.substring(0, i));
        const next = longestNiceSubstring(s.substring(i + 1, s.length));
        return prev.length >= next.length ? prev : next;
    }
    return s;
};


console.log(longestNiceSubstring("YazaAay"));