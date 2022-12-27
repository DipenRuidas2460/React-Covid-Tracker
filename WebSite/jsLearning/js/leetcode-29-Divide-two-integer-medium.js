var divide = (dividend, divisor) => {
    if (dividend === 0) return 0;
    if (dividend === (-(2 ** 31)) && divisor === -1) return (2 ** 31 - 1);
    let res = 0
    let sign = ((dividend >= 0) === (divisor > 0)) ? true : false;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    while (dividend >= divisor) {
        let count = 1
        let base = divisor
        while (base <= Math.floor(dividend / 2)) {
            count *= 2
            base *= 2
        }
        res += count;
        dividend -= base
    }
    return sign ? res : -res;
}