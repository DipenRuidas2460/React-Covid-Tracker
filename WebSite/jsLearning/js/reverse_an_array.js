// Reverse an array

function reverseArr(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++;
        end--;
    }
    return arr;
}

// reverse array by k element - using Recursion

function reverseByKpartition(arr, k) {
    reverseArr(arr, 0, arr.length - 1)
    reverseArr(arr, 0, k - 1)
    reverseArr(arr, k, arr.length - 1)
    return arr
}

// Different questions:-
function reverseFirstKpartition(arr, k) {
    reverseArr(arr, 0, arr.length - 1)
    reverseArr(arr, 0, arr.length - 1 - k)
    console.log(arr);
    reverseArr(arr, arr.length - k, arr.length - 1)
    return arr
}

// Normal Approach

function reverseArray(arr, k) {
    let temp = (new Array(arr.length)).fill(0)
    for (let i = 0; i < arr.length; i++) {
        let shiftIn = (i + k) % arr.length
        temp[shiftIn] = arr[i]
    }
    for (let j in arr) arr[j] = temp[j]
    return arr
}

// console.log(reverseArray([1, 2, 3, 4, 5, 6, 7], 2));

console.log(reverseByKpartition([1, 2, 3, 4, 5, 6, 7, 8, 9], 4))

console.log(reverseFirstKpartition([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));