var myAtoi1 = (str) => {
    let store = str.trim().match(/^[-+]?[0-9]+|^[0-9]+/ig)
    if (store !== null) {
        store = store.join("")
        if (store > 2 ** 31 - 1) return 2 ** 31 - 1
        if (store < -(2 ** 31)) return -(2 ** 31)
        return store
    } else return 0;
}
console.log(myAtoi1("  -42"));

var myAtoi = function (str) {
    let result = 0
    let sign = 1
    let isNonWhiteSpaceMet = false
    let isNumberPhase = false
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (char === ' ') {
            if (!isNonWhiteSpaceMet) continue;
            else break;
        }
        isNonWhiteSpaceMet = true
        if (char >= '0' && char <= '9') {
            isNumberPhase = true
            result = result * 10 + (char - '0')
            continue;
        }
        if (char === '+' && !isNumberPhase) {
            isNumberPhase = true;
            continue;
        }
        if (char === '-' && !isNumberPhase) {
            isNumberPhase = true;
            sign *= -1
            continue;
        }
        break;
    }
    result *= sign;
    return Math.min(Math.max(-(2 ** 31), result), 2 ** 31 - 1)
};


console.log(myAtoi("   -425"));