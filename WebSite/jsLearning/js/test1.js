var subArrSum = (arr) => {
    let currSum = 0
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i]
        if(arr[i] > currSum) currSum = arr[i];
        if(currSum > max) max = currSum;
        // currSum = Math.max(currSum, arr[i]);
        // max = Math.max(max, currSum)
    }
    return max;
}

// var sample = (nums, sum) => {
//     let count = 0
//     let i = 0
//     while (i < nums.length) {
//         // if (i > 0 && nums[i] === nums[i - 1]) continue;
//         let j = 1;
//         let k = nums.length - 1;
//         while (j < nums.length) {
//             if ((nums[i] + nums[j] + nums[k]) - sum == 0) j++;
//             else if ((nums[i] + nums[j] + nums[k]) - sum > 0) k--;
//             else count++;
//             j++;
//         }
//         i++; 
//     }
//     return count;
// }


function findTripilateCount(arr, n) {
    let res = []
    function solve(arr, n, res, item, ind, count) {
        if (count == 3) {
            if (n > 0) {
                res.push([...item])
                return
            }
        }
        if (ind >= arr.length) return
        solve(arr, n, res, item, ind + 1, count)
        item.push(arr[ind])
        solve(arr, n - arr[ind], res, item, ind + 1, count + 1)
        item.pop()
    }
    solve(arr, n, res, [], 0, 0)
    console.log(res)
    return res.length
}

console.log(findTripilateCount([-2, 0, 1, 3], 2))


console.log(subArrSum([1, 2, 3, -2, 5]));
console.log(subArrSum([1, 2, 3, 5, 7, -9, 1]));
console.log(subArrSum([-1,-2,-3,-4]));