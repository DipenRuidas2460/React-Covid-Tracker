function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let curr = i
        while (curr >= 1 && arr[curr - 1] > arr[curr]) {
            [arr[curr - 1], arr[curr]] = [arr[curr], arr[curr - 1]]
            curr--;
        }
    }
    return arr
}

console.log(insertionSort([9, 8, 7, 2, 6, 5, 3, 1]));