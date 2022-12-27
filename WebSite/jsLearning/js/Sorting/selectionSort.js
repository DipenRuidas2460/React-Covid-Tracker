function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let low = i;
        for (let j = i + 1; j < arr.length; j++) if (arr[j] < arr[low]) low = j
        if (i !== low) [arr[i], arr[low]] = [arr[low], arr[i]]
    }
    return arr
}

console.log(selectionSort([65, 24, 10, 42, 63, 20, 11, 27, 34]));
console.log(selectionSort([5, 4, 3, 7, 6, 2, 9]));