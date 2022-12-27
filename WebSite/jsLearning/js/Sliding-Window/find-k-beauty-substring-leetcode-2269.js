var divisorSubstrings = function (num, k) {
    let str = `${num}`
    let count = 0
    for (let i = 0; i < str.length - k + 1; i++) {
        let temp = str.substring(i, i + k)        // starting index = i && last Index = i + k
        if (parseInt(temp) > 0 && num % parseInt(temp) == 0) count++;
    }
    return count;
};

console.log(divisorSubstrings(430043, 2))