function isPrime(num) {
    if (num <= 1) return "Not Prime"
    for (let i = 2; i < num; i++) if (num % i == 0) return "Not Prime"
    return "Prime"
}

console.log(isPrime(15));

// Sieve of Eratoshenes (set all number is prime then check of prime's number table and set false)

function countPrime(num) {
    let count = 0
    let result = new Array(num + 1).fill(true)
    result[0] = false
    result[1] = false
    for (let i = 2; i < num; i++) {
        if (result[i]) {
            count++
            for (let j = 2 * i; j < num; j += i) result[j] = false
        }
    }
    return count
}

console.log(countPrime(10));