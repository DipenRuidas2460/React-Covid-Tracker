function permutationUniq(arr) {
    // let arr = str.split("")
    let ans = []
    let dfs = (i, arr) => {
        if (i === arr.length) {
            // ans.push(arr.join(""))
            ans.push(arr.slice())
            return
        }

        let hash = {}
        for (let j = i; j < arr.length; j++) {
            if (hash[arr[j]]) continue;
            hash[arr[j]] = arr[j];
            [arr[i], arr[j]] = [arr[j], arr[i]]
            dfs(i + 1, arr);
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    dfs(0, arr)
    return ans
}

// console.log(permutationUniq("112"));
console.log(permutationUniq([1,1,2]));