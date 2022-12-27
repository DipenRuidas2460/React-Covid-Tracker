function subSetII(arr) {
    arr.sort((a, b) => (a - b))
    let ans = []
    function findUniqSubSet(arr, i, temp) {
        if (i === arr.length) {
            ans.push(temp.slice())
            return
        }
        findUniqSubSet(arr, i + 1, temp);   // exclude
        temp.push(arr[i])
        findUniqSubSet(arr, i + 1, temp);   // include
        temp.pop()
    }
    findUniqSubSet(arr, 0, [])
    let hash = {}
    for (let j of ans) {
        if (hash[j]) continue;
        else hash[j] = j;
    }
    return Object.values(hash)
    // return hash
}

console.log(subSetII([2, 2, 1]));