// function mergeSort(arr, start, end) {
//     if (start >= end) return
//     let mid = Math.floor((start + end) / 2)
//     mergeSort(arr, start, mid)
//     mergeSort(arr, mid + 1, end)
//     return merge(arr, start, mid, end)
// }

// function merge(arr, start, mid, end) {
//     let arr1 = []
//     let arr2 = []
//     let a = 0     // array 1 indexing
//     let b = 0     // array 2 indexing
//     let c = start   // final array indexing
//     let lenArr1 = mid - start + 1
//     let lenArr2 = end - mid          // end - (mid + 1) + 1 = end - mid
//     for (let i = 0; i < lenArr1; i++) arr1[i] = arr[start + i]
//     for (let j = 0; j < lenArr2; j++) arr2[j] = arr[mid + 1 + j]
//     while (a < lenArr1 && b < lenArr2) {
//         if (arr1[a] <= arr2[b]) {
//             arr[c] = arr1[a]
//             a++
//         }
//         else {
//             arr[c] = arr2[b]
//             b++
//         }
//         c++
//     }
//     while (a < lenArr1) {
//         arr[c] = arr1[a]
//         a++
//         c++
//     }
//     while (b < lenArr2) {
//         arr[c] = arr2[b]
//         b++
//         c++
//     }
//     return arr
// }

// function printArr(arr) {
//     return mergeSort(arr, 0, arr.length - 1)
// }

// console.log(mergeSort([233, 5, 15, 870, 96, 18, 720],0,6))

console.log(printArr([233, 5, 15, 870, 96, 18, 720]));

