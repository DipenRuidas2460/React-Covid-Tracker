let arr = [12, 20, 50, 17, 300, 11]

function maximun(arr){
    let max = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}

console.log(maximun(arr))


// arr.sort((a, b) => a - b)
// console.log(arr)


// let max = arr[arr.length - 1]
// console.log(max)


// or

// console.log(Math.max.apply(Math,arr))