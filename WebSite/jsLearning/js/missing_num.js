// find missing number for sorted array

function missingNumForSortedArr(arr) {
    let mx = Math.max(...arr)
    let totalSum = 0
    for (let i of arr) totalSum += i
    return (mx * (mx + 1) / 2) - totalSum
}


// find missing number for unsorted array

function missingNumForUnSortedArr(arr) {
    let min = Math.min(...arr)
    for (let i in arr) arr[i] = arr[i] - min + 1
    let missingNum = missingNumForSortedArr(arr)
    return (missingNum + min - 1)
}

console.log(missingNumForUnSortedArr([15, 14, 13, 12, 10, 9, 8]));

console.log(missingNumForSortedArr([9, 8, 1, 7, 5, 6, 2, 4]));

console.log(missingNumForSortedArr([1, 2, 3, 4, 5, 7, 8, 9]));