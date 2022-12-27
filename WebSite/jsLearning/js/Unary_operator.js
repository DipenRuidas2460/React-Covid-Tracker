let f = false
console.log(+f)
console.log(-f)
let t = true
console.log(+t)
console.log(-t)

let product = {
    valueOf: function () {
        return 100
    }
}
console.log(product)
console.log(+product)
console.log(-product)

let a = 5
b = 4
let c = a++ + b  // postfix increment
console.log(a)
console.log("result:" + c)

// let d= a-- + b  // postfix increment
// console.log("result:"+d)

let k = true
let g = "true"
console.log(k == g)

let x = 0
let y = 30
console.log(x || y)

let z = !2
console.log(z)