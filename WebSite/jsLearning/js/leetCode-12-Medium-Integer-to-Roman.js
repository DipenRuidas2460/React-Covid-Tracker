var intToRoman = (num) => {
    let res = "";
    let map = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1
    }
    Object.entries(map).forEach(([k, v]) => {
        res += k.repeat(Math.floor(num / v));
        num %= v
    })
    return res;
}