function permutation(str) {
    let arr = str.split("");
    let ans = []
    let dfs = (i, arr) => {
        if (i === arr.length) {
            ans.push([...arr].join(""))
            return
        }
        for (let j = i; j < arr.length; j++) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            dfs(i + 1, arr);
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    dfs(0, arr)
    return ans
}

// Method - 2 (Array of number)

var permute = function (nums) {
    let ans = []
    let dfs = (i, nums) => {
        if (i === nums.length) {
            ans.push([...nums])
            return
        }

        for (let j = i; j < nums.length; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            dfs((i + 1), nums);
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }
    dfs(0, nums)
    return ans
};


// console.log(permutation("abc"));
console.log(permute([1, 2, 3]));