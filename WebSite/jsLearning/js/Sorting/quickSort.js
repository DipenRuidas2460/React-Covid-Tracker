// Method - 1

function quickSort(arr, start, end) {
    if (start >= end) return
    let currPosPivot = getCurrPosOfPivot(arr, start, end)
    quickSort(arr, start, currPosPivot - 1)
    quickSort(arr, currPosPivot + 1, end)
    return arr
}

function getCurrPosOfPivot(arr, low, high) {
    let start = low
    let end = high
    let pivot = arr[high]
    while (start < end) {
        while (arr[start] < pivot && start < end) start++;
        while (arr[end] >= pivot && start < end) end--;
        if (start < end) [arr[start], arr[end]] = [arr[end], arr[start]]
    }
    [arr[start], arr[high]] = [arr[high], arr[start]]
    return start
}

function main(arr) {
    return quickSort(arr, 0, arr.length - 1)
}

console.log(main([6, 4, 3, 2, 5, 1, 9, 10, 15, 90, 8, 3, 3, 2, 4, 5]));


// Method - 2

function QuickSort(arr, left, right) {
    if (left >= right) return
    let currPosPivot = GetCurrPosOfPivot(arr, left, right)
    QuickSort(arr, left, currPosPivot - 1)
    QuickSort(arr, currPosPivot + 1, right)
    return arr
}

function GetCurrPosOfPivot(arr, l, r) {
    let pivot = arr[r]
    let p = l
    for (let i = l; i < r; i++) {
        if (arr[i] <= pivot) {
            [arr[p], arr[i]] = [arr[i], arr[p]]
            p++
        }
    }
    [arr[p], arr[r]] = [arr[r], arr[p]]
    return p;
}

function printSortedArr(arr) {
    return QuickSort(arr, 0, arr.length - 1)
}

console.log(printSortedArr([6, 4, 3, 2, 5, 1, 9, 10, 15, 90, 8, 3, 3, 2, 4, 5]));