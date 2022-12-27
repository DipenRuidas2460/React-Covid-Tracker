function solution(a, b) {
    if (a < b) return solution(b, a)
    else if (b != 0) return (a + solution(a, b - 1))
    else return 0
}

console.log(solution(20,15));