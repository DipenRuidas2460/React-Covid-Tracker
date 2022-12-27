// primitive datatypes
// primitive object
// pass by value example
// In primitive case "const" will not allow to change value in variable 

const a = 1
const b = a
console.log(a === b) // check value and not checking memory location
// pass by value means === check the only value not check memory location

// non primitive datatypes
// non primitive object
// pass by referance (checking loction and value both)

const c=[2]
const d = c

const e=[2]  // store another memory location

d.push(3)
console.log(c)  // same memory location d & c
console.log(e)  // different memory location c & e

console.log(c === d) //true
console.log(c === e) //false
console.log(c === [2]) //false

// reference means memory location
// But in non primitive case "const" will not allow to change memory location but in array chance only elements


const f=[...c]  // copy c arrays elements in f array using spread.
f.push(4)
console.log(c)
console.log(f)
console.log(c===f)

const k=[2,[1]]
console.log(k[0][0])

// copy arrays content of a new location in another array.
const m=[...k]  // shallow copy
console.log(m)
m[1].push(4)  // push element at index 1
console.log(m)
m[1][2] = 6 // insert element in inner array
console.log(k)
console.log(m)
console.log(m === k)
console.log(m[1] === k[1])  // store elements in same memory location

// nested object

// deep copy
const s=[1,[4,5]]

const n=[s[0],[...s[1]]]

const l = [...s]
l[1] = [...s[1]]  // copy inner array location

console.log(s)
console.log(l)
console.log(n)

const t=[1,[2,3]]

// hack

const w = JSON.parse(JSON.stringify(t))
console.log(w)
console.log(t[1] === w[1])

// New feature in js deep copy of inner array element in array.

const u = structuredClone(t)
console.log(u)
console.log(t[1] === u[1])

// closures

// 1.

function inn(){
    console.log(b) 
}
function game(a,b){
    return inn
}
const p1=game(8,9)
console.log(p1)

// 2.

function sum(a,b){
    return function gap(){
        console.log(a)
    }
}

const b1 = sum(3,4)
console.log(b1)













