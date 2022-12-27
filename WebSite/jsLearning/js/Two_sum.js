// Two Sum Frequency Counting method for UnSorted array

let twoSum1 = function (arr, target) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[target - arr[i]] !== undefined) return [obj[target - arr[i]], i]
        else obj[arr[i]] = i;
    }
    return false;
};

console.log(twoSum1([3, 2, 4], 6))

// Two sum Multi Pointer Method for sorted array
// Work for sorted array

function twoSum(arr, target) {
    let start = 0
    let end = arr.length - 1
    while (start < end) {
        if (arr[start] + arr[end] == target) {
            return [start, end]
        }
        else if (arr[start] + arr[end] > target) {
            end--
        }
        else {
            start++
        }
    }
    return false
}

console.log(twoSum([2, 3, 4], 6))



