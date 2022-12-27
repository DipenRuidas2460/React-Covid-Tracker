let n = 5
let str = ""
let i = 1

// while (i<=n) {
//     let j = 1
//     while (j<=i) {
//         str+=" "+(n-j+1)
//         j++
//     }
//     str+="\n"
//     i++
// }
// console.log(str)

// while (i<=n) {
//     let j = 1
//     while (j<=i) {
//         str+=" "+"*"
//         j++
//     }
//     str+="\n"
//     i++
// }
// console.log(str)


// while (i<=n) {
//     let j = 1
//     while (j<=i) {
//         str +=" "+ i
//         j++
//     }
//     str+="\n"
//     i++
// }
// console.log(str)

// let count = 1
// while (i<=n) {
//     let j = 1
//     while (j<=n) {
//         str +=" " + count++
//         j++
//     }
//     str+="\n"
//     i++
// }
// console.log(str)

// let count = 1
// while (i<=n) {
//     let j = 1
//     while (j<=i) {
//         str+=" "+count++
//         j++
//     }
//     str+="\n"
//     i++
// }
// console.log(str)

// while (i<=n) {
//     let j = 1
//     let val = i
//     while (j<=i) {
//         str += " " + val++
//         j++
//     }
//     str+="\n"
//     i++
// }
// console.log(str)

// while (i<=n) {
//     let j = 1
//     while (j<=i) {
//         str+=" "+ (i-j+1)
//         j++
//     }
//     str+="\n"
//     i++
// }
// console.log(str)

while (i < n + 1) {
    let j = 1
    while (j < n + 1) {
        // str += " "+ (String.fromCharCode(65+i-1))
        str += " " + (String.fromCharCode('A'.charCodeAt(0) + i - 1))
        j++
    }
    str += "\n"
    i++
}
console.log(str)

// console.log('f'.charCodeAt(0))