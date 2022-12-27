var subtractProductAndSum = function (n) {
    let prod = 1
    let sum = 0
    while (n !== 0) {
        let digit = n % 10
        prod *= digit
        sum += digit
        n = Math.floor(n / 10)
    }
    let ans = prod - sum
    return ans
}

console.log(subtractProductAndSum(1234));