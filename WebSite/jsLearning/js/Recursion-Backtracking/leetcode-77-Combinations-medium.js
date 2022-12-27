var combine = (n, k) => {
    let res = [];
    let dfs = (ind, curr) => {
        if (curr.length === k) {
            res.push([...curr]);    // store one copy of curr.
            return;
        }

        for (let i = ind; i <= n; i++) {
            curr.push(i);
            dfs(i + 1, curr);
            curr.pop();
        }
    };

    dfs(1, []);
    return res;
}

console.log(combine(4, 2));