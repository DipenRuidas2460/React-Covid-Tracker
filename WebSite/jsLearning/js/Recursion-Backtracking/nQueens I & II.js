// NQueen-I

var solveNqueens = (n) => {
    let ans = []
    let dfs = (i, n, slate) => {
        // Backtracking
        let lastQ = i - 1
        for (let prevQ = 0; prevQ < lastQ; prevQ++) {
            if (slate[prevQ] === slate[lastQ]) return;   // check Same column

            // Check Diagonally

            let rowDiff = Math.abs(prevQ - lastQ)
            let colDiff = Math.abs(slate[prevQ] - slate[lastQ])
            if (rowDiff === colDiff) return;
        }
        // Base case
        if (i === n) {
            ans.push(slate.slice())
            return;
        }

        // recursive Case

        for (let col = 0; col < n; col++) {
            slate.push(col)
            dfs(i + 1, n, slate);
            slate.pop()
        }
    }
    dfs(0, n, []);
    return ans.map((board) => formatBoard(board))
}

let formatBoard = (board) => {
    let ans = []
    for (let col = 0; col < board.length; col++) {
        let arr = new Array(board.length).fill(".")
        arr[board[col]] = "Q"
        ans.push(arr.join(""))
    }
    return ans
}

console.log(solveNqueens(4));


// NQueen-II

var totalNQueens = (n) => {
    let ans = []
    let dfs = (i, n, slate) => {
        // Backtracking
        let lastQ = i - 1
        for (let prevQ = 0; prevQ < lastQ; prevQ++) {
            if (slate[prevQ] === slate[lastQ]) return;   // check Same column

            // Check Diagonally

            let rowDiff = Math.abs(prevQ - lastQ)
            let colDiff = Math.abs(slate[prevQ] - slate[lastQ])
            if (rowDiff === colDiff) return;
        }
        // Base case
        if (i === n) {
            ans.push(slate.slice())
            return;
        }

        // recursive Approach

        for (let col = 0; col < n; col++) {
            slate.push(col)
            dfs(i + 1, n, slate);
            slate.pop()
        }
    }
    dfs(0, n, []);
    return ans.length
}

console.log(totalNQueens(4));