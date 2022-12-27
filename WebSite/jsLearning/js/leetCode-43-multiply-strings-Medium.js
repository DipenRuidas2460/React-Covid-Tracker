var multiply = (num1, num2) => {
    let ans = new Array(num1.length + num2.length).fill(0);
    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            let prevRemin = ans[i + j + 1];
            let product = num1[i] * num2[j] + prevRemin;
            let digit = product % 10;
            let carry = Math.floor(product / 10);
            ans[i + j + 1] = digit;
            ans[i + j] += carry
        }
    }
    while (ans[0] === 0) ans.shift();
    return ans.length === 0 ? "0" : ans.join("")
}