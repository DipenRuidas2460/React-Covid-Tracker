function subSetSum(arr) {
    let ans = [];
    let dfs = (arr, i, sum) => {
        // Base Case :--
        if (i === arr.length) {
            ans.push(sum)
            return;
        }
        // recursive call 
        dfs(arr, i + 1, sum);
        dfs(arr, i + 1, sum + arr[i]);        // Time complexcity = O(2^n)
    }
    dfs(arr, 0, 0)
    return ans
}

console.log(subSetSum([5, 2, 1]));
console.log(subSetSum([1, 2, 3]));


