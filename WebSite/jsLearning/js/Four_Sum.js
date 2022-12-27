// let fourSum = function (nums, target) {
//     if (nums.length < 4) return [];
//     let len = nums.length;
//     let res = [];
//     nums.sort((a, b) => (a - b));

//     for (let i = 0; i < len - 3; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;
//         if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
//         if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) continue;

//         for (let j = i + 1; j < len - 2; j++) {
//             if (j > i + 1 && nums[j] === nums[j - 1]) continue;
//             if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
//             if (nums[i] + nums[j] + nums[len - 1] + nums[len - 2] < target) continue;

//             let l = j + 1;
//             let r = len - 1;

//             while (l < r) {
//                 let sum = nums[i] + nums[j] + nums[l] + nums[r];

//                 if (sum < target) l++;
//                 else if (sum > target) r--;
//                 else {
//                     res.push([nums[i], nums[j], nums[l], nums[r]]);
//                     while (l < r && nums[l] === nums[l + 1]) l++;
//                     while (l < r && nums[r] === nums[r - 1]) r--;
//                     l++;
//                     r--;
//                 }
//             }
//         }
//     }

//     return res;
// };




function fourSum(arr, target) {
    if (arr.length < 4) return []
    let res = []
    let len = arr.length
    arr.sort((a, b) => (a - b))

    for (let i = 0; i < len - 3; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue;
        if (arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3] > target) break;
        if (arr[i] + arr[len - 1] + arr[len - 2] + arr[len - 3] < target) continue;

        for (let j = i + 1; j < len - 2; j++) {
            if (j > i + 1 && arr[j] === arr[j - 1]) continue;
            if (arr[i] + arr[j] + arr[j + 1] + arr[j + 2] > target) break;
            if (arr[i] + arr[j] + arr[len - 1] + arr[len - 2] < target) continue;

            let l = j + 1;
            let r = len - 1;

            while (l < r) {
                let sum = arr[i] + arr[j] + arr[l] + arr[r];

                if (sum < target) l++;
                else if (sum > target) r--;
                else {
                    res.push([arr[i], arr[j], arr[l], arr[r]]);
                    while (l < r && arr[l] === arr[l + 1]) l++;
                    while (l < r && arr[r] === arr[r - 1]) r--;
                    l++;
                    r--;
                }
            }
        }
    }

    return res;
}


console.log(fourSum([1, 0, -1, 0, -2, 2], 0));