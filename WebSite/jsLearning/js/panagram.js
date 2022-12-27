function missingChars(str) {
    let present = new Array(26).fill(false);
    let charsList = [];
    for (let i in str) {
        if ('A'.charCodeAt(0) <= str[i].charCodeAt(0) && str[i].charCodeAt(0) <= 'Z'.charCodeAt(0)) {
            present[str[i].charCodeAt(0) - 'A'.charCodeAt(0)] = true;
        }
        else if ('a'.charCodeAt(0) <= str[i].charCodeAt(0) && str[i].charCodeAt(0) <= 'z'.charCodeAt(0)) {
            present[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] = true;
        }
    }
    for (let i = 0; i < 26; i++) if (present[i] == false) {
        charsList.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
    }
    return charsList.join("");
}


console.log(missingChars("The quick brown fox jumps"))   // adglvyz
console.log(missingChars("abcdefghijklmnopqrstuvw"));   // xyz
console.log(missingChars("aaaaaaaaaaaaaaaaaaaaaaaa"));  // bcdefghijklmnopqrstuvwxyz
console.log(missingChars("abcdef gghijk nolmpqrstuvwxyz")); // 