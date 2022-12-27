// function rec(n) {
//     if (n==0) return 
//     console.log(n)
//     return rec(n-1)
// }

// rec(50)

// console.log("Fibonanci Series Sum:-")

// function fib(n) {
//     if(n<=1) return n
//     return (fib(n-1)+fib(n-2))
// }

// console.log(fib(10))


// let arr1 = [3, 4, 5, 6, 7, 8]
// function printArrEle(index) {
//     if (index >= arr1.length) {
//         return
//     }
//     console.log(arr1[index])
//     // index++               
//     printArrEle(index + 1)
//     console.log("Index is:-", index)
// }
// printArrEle(0)


// let arr = [3, 4, 5, 6, 7, 8]
// function printArrEleInReverse(index) {
//     if (index >= arr.length) {
//         return
//     }
//     printArrEleInReverse(index + 1)
//     console.log(arr[index], "index:-" + index)
// }
// printArrEleInReverse(0)

// function countDown(count) {
//     if (count<0) {
//         return
//     }
//     console.log(count)
//     countDown(count-1)
//     console.log("index:-",count)
// }
// countDown(9)


// function countDown(count,n) {
//     if (count>n) {
//         return
//     }
//     console.log(count)
//     countDown(count+1,n)
//     console.log("index:-",count)
// }
// countDown(0,49)


// function SumRange(n) {
//     if (n==1) return 1
//     return (n+SumRange(n-1))
// }
// console.log(SumRange(20))



// function div(arr) {
//     if (arr.length == 0) {
//         return
//     }
//     let ele = arr.shift()
//     if (ele % 7 == 0) console.log("Yes")
//     else console.log("No")
//     div(arr)

// }
// div([30, 42, 14, 77, 101, 28])



// leet code problem -231

// Recursive Approach

var isPowerOfTwo = function (n) {
    if (n < 1) return false
    if (n == 1) return true
    if (n % 2 == 0 && isPowerOfTwo(n / 2)) {
        return true
    }
    return false

};

let res = isPowerOfTwo(35)
console.log(res)