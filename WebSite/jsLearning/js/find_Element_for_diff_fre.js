function Solution(arr) {
    let obj = {}
    for (let i of arr) {
        obj[i] = (obj[i] || 0) + 1
    }

    let key = Object.keys(obj)

    for (let i = 1; i < key.length; i++) {

        if (obj[key[i - 1] == obj[key[i]] && obj[key[i]] != obj[key[i + 1]]]) {
            return key[i + 1]
        }
        else if (obj[key[i - 1] != obj[key[i]] && obj[key[i]] == obj[key[i + 1]]]) {
            return key[i - 1]
        }
    }
}

let res = Solution([1, 1, 2, 2, 3])
console.log(res)