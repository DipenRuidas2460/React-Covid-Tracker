// Using Recursion

function fact(n) {
    if (n < 0) return "Invalid Input"
    if (n === 0) return 1
    return n * fact(n - 1)
}
console.log(fact(6))

// Using normal 

function fact(n) {
    if (n < 0) return "Invalid Input"
    let f = 1
    for (let i = 1; i < n + 1; i++) {
        f = f * i
    }
    return f
}

const d = fact(0)
console.log(d)