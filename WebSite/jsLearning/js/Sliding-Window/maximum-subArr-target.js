function subArraySum(arr, targetSum) {
    let ans = []
    let start = 0;
    let end = 0;
    let sum = 0;
    let i = 0
    let map = new Map();
    while (i < arr.length) {
        sum += arr[i];
        let res = sum - targetSum;
        if (res == 0) {
            start = 0;
            end = i;
            break;
        }
        else if (map.has(res)) {
            start = map.get(res) + 1;
            end = i;
            break;
        }
        map.set(sum, i);
        i++;
    }
    if (end == 0) return ans;
    else {
        while (start <= end) {
            ans.push(arr[start])
            start++;
        }
        return ans;

    }
}


console.log(subArraySum([10, 2, -2, -20, 10], -10));   // [10, 2, -2, -20]
console.log(subArraySum([-10, 0, 2, -2, -20, 10, 20], 20));  // [20]
console.log(subArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4], 6)); // [4, -1, 2, 1]
console.log(subArraySum([1, 4, 0, 0, 3, 10, 5], 7));  // [4, 0, 0, 3]
console.log(subArraySum([1, 4, 20, 3, 10, 5], 33));   // [20, 3, 10]
console.log(subArraySum([1, -1, 3, 2, -2, -8, 1, 7, 10, 23], 0)); // [1, -1]