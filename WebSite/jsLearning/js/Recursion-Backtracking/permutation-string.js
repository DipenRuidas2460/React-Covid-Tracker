function permution(str) {
    let arr = str.split("")
    let ans = []
    let dfs = (i, arr) => {
        if (i === arr.length) {
            ans.push(arr.join(""))
            return;
        }
        for (let j = i; j < arr.length; j++) {
            [arr[i],arr[j]] = [arr[j],arr[i]]
            dfs(i + 1, arr);
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }

    }
    dfs(0, arr)
    return ans
}

console.log(permution("abc"));