function reverseInteger(x) {
    let isNegetive = false
    let ans = 0
    if (x < 0) {
        isNegetive = true
        x *= -1
    }
    while (x > 0) {
        ans = (ans * 10) + (x % 10);
        x = Math.floor(x / 10);
    }
    if (ans > 2 ** 31 - 1 || ans < -(2 ** 31)) return 0
    return isNegetive ? -ans : ans
}


var reverse = function (x) {
    let ans = 0;
    let isNegative = false;
    if (x < 0) {
        isNegative = true;
        x *= -1;
    }
    while (x > 0) {
        ans = ans * 10 + (x % 10);

        x = Math.floor(x / 10);
    }
    if (ans < -(2 ** 31) || ans > 2 ** 31 - 1) return 0;
    return isNegative ? -ans : ans;
};

console.log(reverse(-123));

console.log(reverseInteger(-123));