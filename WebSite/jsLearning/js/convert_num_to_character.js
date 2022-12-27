// Method - 1

function encodeNumToChar(arr) {
    for (let i in arr) arr[i] = generateNumToChar(arr[i])
    return arr
}

function generateNumToChar(num) {
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let finalStr = ''
    let i = 0
    while (i < num) {
        finalStr += alpha[i % 26]
        i++
    }
    return finalStr
}

console.log(encodeNumToChar([2,5]));

// Method - 2

function convertNumToChar(arr) {
    let max = Math.max(...arr)
    let result = ['']
    for (let i = 1; i < max + 1 ; i++) result.push(generateNumToChar(i))
    for (let i in arr) arr[i] = result[arr[i]]
    return arr
}


console.log(convertNumToChar([2, 5]));