// function mergeSort(arr, start, end) {
//     if (start >= end) return;
//     let mid = Math.floor((start + end) / 2)
//     mergeSort(arr, start, mid);
//     mergeSort(arr, mid + 1, end);
//     return merge(arr, start, mid, end);
// }

// function merge(arr, start, mid, end) {
//     let arr1 = []
//     let arr2 = []
//     let a = 0
//     let b = 0
//     let c = start
//     let lenArr1 = mid - start + 1
//     let lenArr2 = end - mid          // end - (mid+1) + 1
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



// let mergeSort = (arr, s, e) => {
//     if (s >= e) return;
//     let mid = Math.floor((s + e) / 2);
//     mergeSort(arr, s, mid);
//     mergeSort(arr, mid + 1, e);
//     return merge(arr, s, mid, e)
// }

// let merge = (arr, s, mid, e) => {
//     let arr1 = []
//     let arr2 = []
//     let lenArr1 = mid - s + 1;
//     let lenArr2 = e - mid;
//     let a = 0
//     let b = 0
//     let c = s
//     for (let i = 0; i < lenArr1; i++) arr1[i] = arr[s + i]
//     for (let i = 0; i < lenArr2; i++) arr2[i] = arr[mid + 1 + i]
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
//         b++
//         c++
//     }
//     return arr
// }

// let mergeSort = (arr, start, end) => {
//     if (start >= end) return;
//     let mid = Math.floor((start + end) / 2);
//     mergeSort(arr, start, mid);
//     mergeSort(arr, mid + 1, end);
//     return merge(arr, start, mid, end);
// }

// let merge = (arr, start, mid, end) => {
//     let a = 0, b = 0, c = start, arr1 = [], arr2 = [];
//     let lenArr1 = mid - start + 1;
//     let lenArr2 = end - mid;
//     for (let i = 0; i < lenArr1; i++) arr1[i] = arr[start + i];
//     for (let j = 0; j < lenArr2; j++) arr2[j] = arr[mid + 1 + j];
//     while (a < lenArr1 && b < lenArr2) {
//         if (arr1[a] <= arr2[b]) {
//             arr[c] = arr1[a]
//             a++
//         } else {
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

// let printArr = (arr) => {
//     return mergeSort(arr, 0, arr.length - 1)
// }


let quickSort = (arr, start, end) => {
    if (start >= end) return
    let currPosPivot = getCurrPosOfPivot(arr, start, end);
    quickSort(arr, start, currPosPivot - 1);
    quickSort(arr, currPosPivot + 1, end);
    return arr
}

let getCurrPosOfPivot = (arr, l, h) => {
    let pivot = arr[h];
    let p = l;
    for (let i = l; i < h; i++) {
        if (arr[i] <= pivot) {
            [arr[p], arr[i]] = [arr[i], arr[p]];
            p++;
        }
    }
    [arr[p], arr[h]] = [arr[h], arr[p]];
    return p;
}

let printArr1 = (arr) => {
    return quickSort(arr, 0, arr.length - 1)
}

console.log(printArr1([89, 85, 4, 2, 0, 64, 102, 67]));