// function reverseString(s) {
//     let str = `${s}`
//     if (str.length <= 1) return str
//     return reverseString(str.slice(1)) + str[0]
// }
// let res = reverseString(12345)
// let res1 = reverseString("Hi there")
// console.log(res);
// console.log(res1);

// function reverseString(arr,start,end) {
//     if (arr.length == 0) return []
//     if (start < end) {
//         let temp = arr[start]
//         arr[start] = arr[end]
//         arr[end] = temp
//         reverseString(arr,start+1,end-1)
//     }
// }
// let s = "gopal hi"
// let str = `${s}`
// let arr = str.split("")
// reverseString(arr,0,arr.length-1)
// str = arr.join("")
// console.log(str);


// const reverseNum = (n) => n < 10? String(n): String (n % 10) + reverseNum (Math .floor (n / 10))
// console .log (reverseNum (8675309))



// reverse sentence words

function reverse(s) {
    let str = `${s}`
    if (str.length <= 1) return str
    return reverse(str.slice(1)) + str[0]
}
function reverseSentWords(sent) {
    let words = sent.split(" ")
    for (let i in words) {
        words[i] = reverse(words[i])
    }
    return words.join(" ")
}
let res = reverse("Hi there")
let res1 = reverseSentWords("Hi there")
console.log(res);
console.log(res1);