function checkCorrectOrNot(str) {
    let count1 = new Array(26).fill(0)
    let count2 = new Array(26).fill(0)
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        count1[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++   // first half count
        count2[str[j].charCodeAt(0) - 'a'.charCodeAt(0)]++   // second half count
    }
    for (let k = 0; k < 26; k++) if (count1[k] != count2[k]) return "No"
    return "Yes"
}

console.log(checkCorrectOrNot("abcbac"))  // yes
console.log(checkCorrectOrNot("abcaabbc"))  // no
console.log(checkCorrectOrNot("abcdeabcd")) // yes

console.log("------------------------")


function solution(str) {
    let len = Math.floor(str.length / 2)
    let i = len
    let obj1 = {}, obj2 = {}
    if (str.length % 2 == 1) i = len + 1
    for (let k = 0; k < len; k++) obj1[str[k]] = (obj1[str[k]] || 0) + 1
    for (let m = i; m < str.length; m++) obj2[str[m]] = (obj2[str[m]] || 0) + 1
    for (let key in obj1) if (obj2[key] != obj1[key]) return "No"
    return "Yes"
}

console.log(solution("abcbac"))  // yes
console.log(solution("abcaabbc"))  // no
console.log(solution("abcdeabcd")) // yes