// var firstUniqChar = (s) => {
//     let obj = {};
//     for (let i = 0; i < s.length; i++) { obj[s[i]] = (obj[s[i]] || 0) + 1}
//     for (let i = 0; i < s.length; i++) {if(obj[s[i]] === 1) return i}
//     return -1;
// }

var firstUniqChar = (s)=>{
    let arr = new Array(26).fill(0);
    let charA = 'a'.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {arr[s[i].charCodeAt(0)-charA]++}
    for (let i = 0; i < s.length; i++) {if(arr[s[i].charCodeAt(0)-charA] === 1) return i}
    return -1;
}