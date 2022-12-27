function solution(a, i = 3) {
    if (a == 2) return 1
    if (a < 2 || a % 2 == 0) return 0
    if (i * i > a) return 1
    if (a % i == 0) return 0
    return soltion(a, i + 2)
}

console.log(solution(40));