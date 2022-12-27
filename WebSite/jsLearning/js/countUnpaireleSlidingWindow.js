function withOutPair(arr) {
    let map = new Map()
    let result = []
    for (let i of arr) map.set(i, (map.get(i) || 0) + 1)
    // map.forEach((value, key) => { if (value % 2 === 1) result.push(key) })
    for (let val of map) if (val[1] % 2 === 1) result.push(val[0])
    return result
}

console.log(withOutPair([11, 7, 8, 9, 9, 3, 3, 3, 48, 4, 4, 5, 8, 8, 11]));