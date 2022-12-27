function solution(a) {
    let str = `${a}`
    if(str.length <= 1) return str
    return solution(str.slice(1)) + str[0]
}

console.log(solution(10348));