function duplicates(arr) {
    let map = new Map()
    let countDup = []
    for (let i of arr) map.set(i, (map.get(i) || 0) + 1)    // for-of gets all values in iterator, but for-in use as normal for loop
    for (let pairs of map) if (pairs[1] > 1) countDup.push(pairs[0])
    return countDup
}

console.log(duplicates([23, 1, 5, 8, 9, 5, 1, 5, 3]));