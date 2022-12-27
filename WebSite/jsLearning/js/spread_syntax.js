// Spread Syntax

const a=[2,1,35,6]
const b=[56,58,92,12,42,31]
const f=[200,54,112,37]
console.log(...a)

const c = a.concat(b)
console.log(c)
const d = [...a, ...b, ...c]
console.log(d)

const g = console.log(...a)

// Destructuring syntax

const n = [1,2,3,4,5,6,7,8]

const [v, m, q, ...j] = [1,2,3,4,5,6,7,8]  // Rest Parameter

// ...j is Rest parameter it use divided by array

console.log(v)
console.log(m)
console.log(q)
console.log(j)  // Divided the remaining part of the array

// CRED operations => Create, Read, Update, Delete
// Creation of array :- [1,2,3,4,5]
// Read array i[0][1] = 2

const i=[
    [1,2,4],
    [56,57,78],
    [34,73,23]
]

// console.log(i[1][2])

// Update Array

const r = [1,2,3,4,11,9,7,6]
r[2]=43   //update  element from the index which you need 
r.push(24)  // add element from last 
r.unshift(18) // add element from first
console.log(r)

// Delete element from array

r[2]=undefined
console.log(r)

// r.pop()  remove element from last
// r.shift()  remove element from first
//r.splice(4,2,70,90) // remove element from middle and add element 
const p=r.slice(1,5)
console.log(p)
console.log(r)

// Convert array to string
const s=[12,65,78,45]
console.log(s)
console.log(s.toString())
