function solution(a, b) {
    let result = []
    if (a % 2 != 0) result.push(a)
    if (a + 1 > b) return result
    else {
        result = result.concat(solution(a + 1, b))
        return result.join(" ")
    }
}

console.log(solution(16, 25));