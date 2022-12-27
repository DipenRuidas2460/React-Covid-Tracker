function mergeArrays(arr1, arr2) {
    let result = []
    let obj = {}
    let a = 0  // arr1 index
    let b = 0  // arr2 index 
    while (a < arr1.length && b < arr2.length) {
        if (arr1[a].name <= arr2[b].name) {
            if (!(obj[arr1[a].name])) result.push(arr1[a])
            else result[obj[arr1[a].name]] = arr1[a]
            obj[arr1[a].name] = result.length - 1
            a++
        } else {
            if (!(obj[arr2[b].name])) result.push(arr2[b])
            else result[obj[arr2[b].name]] = arr2[b]
            obj[arr2[b].name] = result.length - 1
            b++
        }
    }
    while (a < arr1.length) {
        if (!(obj[arr1[a].name])) result.push(arr1[a])
        else result[obj[arr1[a].name]] = arr1[a]
        obj[arr1[a].name] = result.length - 1
        a++
    }
    while (b < arr2.length) {
        if (!(obj[arr2[b].name])) result.push(arr2[b])
        else result[obj[arr2[b].name]] = arr2[b]
        obj[arr2[b].name] = result.length - 1
        b++
    }
    return result;
}

let arr1 = [{ name: 'a', value: 123 }, { name: 'b', value: 666 }]
let arr2 = [{ name: 'c', value: 444 }, { name: 'd', value: 999 }, { name: 'b', value: 111 }]

console.log(mergeArrays(arr1, arr2));