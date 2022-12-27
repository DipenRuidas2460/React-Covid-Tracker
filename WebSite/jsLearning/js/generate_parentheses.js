var generateParentheses = (n) => {
    let ans = []
    let dfs = (i, n, slate, oCount, cCount) => {

        // Backtracking:-
        if (oCount > n) return;
        if (cCount > oCount) return;

        // Base Case:-
        if (i === n * 2) {
            ans.push(slate.join(""))
            return;
        }

        // recursive Case:-

        // 1.Add open parenthisis:-
        slate.push("(")
        dfs(i + 1, n, slate, oCount + 1, cCount);
        slate.pop()

        // 2.Add close parenthisis:-
        slate.push(")")
        dfs(i + 1, n, slate, oCount, cCount + 1);
        slate.pop()
    }
    dfs(0, n, [], 0, 0);
    return ans
}

console.log(generateParentheses(2));