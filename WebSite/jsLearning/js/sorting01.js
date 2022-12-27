// Using 1 iteration 
// Method - 1

function sorting01(arr) {
    let start = 0
    let end = arr.length - 1
    while (start < end) {
        while (arr[start] === 0 && start < end) start++
        while (arr[end] === 1 && start < end) end--
        if(start < end) [arr[start],arr[end]] = [arr[end],arr[start]]
    }
    return arr
}

// console.log(sorting01([0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1]));


// Using 3 iteration 
// Method - 2

function Sorting01(arr) {
    let index = 0
    let count0 = 0
    for(let i of arr) if(i === 0) count0++
    let count1 = arr.length - count0
    while(count0 > 0){
        arr[index] = 0
        count0--
        index++
    }
    while(count1 > 0){
        arr[index] = 1
        count1--
        index++
    }
    return arr
}

// console.log(Sorting01([0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1]));


function sorting012(arr) {
    let start = 0
    let end = arr.length - 1
    while (start < end) {
        while (arr[start] === 0 && start < end) start++
        while (arr[end] === 1 && start < end) end--
        if(start < end) [arr[start],arr[end]] = [arr[end],arr[start]]
    }
    return arr
}

// console.log(sorting012([2,0,2,1,1,0]));