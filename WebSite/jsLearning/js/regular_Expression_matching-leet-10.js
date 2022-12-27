var isMatch = (s, p) => {
    const check = (s, p, i, j) => {
        if (j > p.length - 1) return i > s.length - 1
        const isNextQ = p[j + 1] === "*"
        if (isNextQ) {
            if ([s[i], "."].includes(p[j])) return check(s, p, i, j + 2) || (i < s.length && check(s, p, i + 1, j))
            else return check(s, p, i, j + 2)
        } else {
            if ([s[i], "."].includes(p[j])) return (i < s.length && check(s, p, i + 1, j + 1))
            else return false
        }
    }
    return check(s, p, 0, 0)
}

console.log(isMatch("aa", ".*"));