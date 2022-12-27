// var isMatch = (s, p) => {
//     let sPtr = 0, pPtr = 0, startInd = -1, point = -1;
//     while (sPtr < s.length) {
//         if (pPtr < p.length && s[sPtr] === p[pPtr] || p[pPtr] === "?") {
//             pPtr++;
//             sPtr++;
//         } else if (pPtr < p.length && p[pPtr] === "*") {
//             startInd = pPtr;
//             point = sPtr
//             pPtr++;
//         } else if (startInd === -1) return false;
//         else {
//             pPtr = startInd + 1;
//             sPtr = point + 1;
//             point = sPtr;
//         }
//     }
//     for (let i = pPtr; i < p.length; i++) {
//         if (p[i] !== "*") return false;
//     }
//     return true;
// }


var isMatch = (s, p) => {
    let sPtr = 0, pPtr = 0, startInd = -1, point = -1;
    while (sPtr < s.length) {
        if (pPtr < p.length && s[sPtr] === p[pPtr] || p[pPtr] === "?") {
            pPtr++;
            sPtr++;
        } else if (pPtr < p.length && p[pPtr] === "*") {
            startInd = pPtr;
            point = sPtr;
            pPtr++;
        } else if (startInd === -1) return false;
        else {
            pPtr = startInd + 1;
            sPtr = point + 1
            point = sPtr;
        }
    }
    for (let i = pPtr; i < p.length; i++) if (p[i] !== "*") return false;
    return true;
}