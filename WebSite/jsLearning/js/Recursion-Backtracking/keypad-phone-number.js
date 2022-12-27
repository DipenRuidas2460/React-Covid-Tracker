var letterCombinations = (digits) => {
    if (digits.length === 0) return [];
    let ans = []
    let alpha = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }
    let dfs = (i, digits, slate) => {
        if (i === digits.length) {
            ans.push(slate.join(""))
            return;
        }
        let chars = alpha[digits[i]]
        for (let char of chars) {
            slate.push(char);
            dfs(i + 1, digits, slate);
            slate.pop()
        }
    }
    dfs(0, digits, []);
    return ans;
}

console.log(letterCombinations("23"));