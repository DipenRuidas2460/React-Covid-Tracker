function solution(n, arr) {
    let mid = Math.floor(n / 2)
    mergeSort(arr, 0, n - 1)
    let j = n - 1
    for (let i = mid; i < j; i++) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        j--
    }
    return arr.join(" ")
}

function mergeSort(arr, start, end) {
    if (start >= end) return
    let mid = Math.floor((start + end) / 2)
    mergeSort(arr, start, mid)
    mergeSort(arr, mid + 1, end)
    return merge(arr, start, mid, end)
}

function merge(arr, start, mid, end) {
    let lenArr1 = mid - start + 1
    let lenArr2 = end - mid
    let arr1 = []
    let arr2 = []
    for (let i = 0; i < lenArr1; i++) arr1[i] = arr[start + i]
    for (let j = 0; j < lenArr2; j++) arr2[j] = arr[mid + 1 + j]
    let a = 0
    let b = 0
    let c = start
    while (a < lenArr1 && b < lenArr2) {
        if (arr1[a] <= arr2[b]) {
            arr[c] = arr1[a]
            a++
        } else {
            arr[c] = arr2[b]
            b++
        }
        c++
    }
    while (a < lenArr1) {
        arr[c] = arr1[a]
        a++
        c++
    }
    while (b < lenArr2) {
        arr[c] = arr2[b]
        b++
        c++
    }
    return arr
}

console.log(solution(11, [5, 4, 6, 2, 1, 3, 8, 9, 7, 11, 10]));