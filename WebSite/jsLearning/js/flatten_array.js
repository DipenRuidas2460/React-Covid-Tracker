function flattenArr(arr) {
    let newArr = []
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) newArr.push(arr[i])
        else newArr = newArr.concat(flattenArr(arr[i]))
    }
    return newArr
}


function multiSum(arr) {
    let sum = 0
    for(let i of arr){
        if(!Array.isArray(i)) sum += i
        else sum += multiSum(i)
    }
    return sum
}

console.log(multiSum([[2, 3, 9], 1, [98, [85, 76]], [2, [7, [7, 8, [4, [7]]]]]]));

console.log(flattenArr(["a", "b", ["c", [[["d", ["e"]]]]]]))