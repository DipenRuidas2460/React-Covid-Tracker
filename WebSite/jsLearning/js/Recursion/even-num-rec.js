function solution(a, b, arr) {
    if (a > b) return
    if (a % 2 === 0) arr.push(a)
    solution(a + 1, b, arr)
    return arr.join(" ")
}

console.log(solution(16,25,[]));