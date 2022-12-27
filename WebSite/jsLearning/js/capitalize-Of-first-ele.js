// function CapitalizeFirstEle(arr) {
//     if (arr.length == 0) {
//         return []
//     }
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         let arr[0] = arr[i]
//         newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1))
//     }
//     return newArr
// }

// console.log(CapitalizeFirstEle(["go","dog"]));

function capitalizeFirstEle(arr) {
    if (arr.length == 0) return []
    let newArr = []
    newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1))
    return newArr.concat(capitalizeFirstEle(arr.slice(1)))
}
console.log(capitalizeFirstEle(["hi","hey","hello"]))


// function capitalizeFirstLetter(arr,index) {
//     if (index < arr.length) {
//         arr[index] = arr[index][0].toUpperCase() + arr[index].slice(1)
//         capitalizeFirstLetter(arr,index+1)
//     }
//     return arr
// }

// console.log(capitalizeFirstLetter(["hi","hey","hello"],0));