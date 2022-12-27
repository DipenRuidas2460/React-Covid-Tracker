//  Striagth binary search(using for sorted array)

// T.c = O(log n)

function straigthBinarySearch(nums, target) {
    let start = 0
    let end = nums.length
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (target < nums[mid]) end = mid - 1
        else if (target > nums[mid]) start = mid + 1
        else return mid
    }
    return false
}

console.log(straigthBinarySearch([55, 85, 98, 107, 605, 809, 1045], 98));


// Recursive Binary Search (using for sorted array)
// T.C = O(log n)

function recursiveBinarySearch(nums, start, end, target) {
    if (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if(target === nums[mid]) return mid;
        else if (target < nums[mid]) return recursiveBinarySearch(nums, 0, mid - 1, target)
        else return recursiveBinarySearch(nums, mid + 1, end, target)
    }
    return false
}

console.log(recursiveBinarySearch([15, 25, 35, 46, 48, 78, 98, 105, 608], 0, 9, 608));


