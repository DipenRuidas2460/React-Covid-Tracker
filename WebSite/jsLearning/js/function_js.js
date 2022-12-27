// let a = 10
// a = a + 8
// console.log("normal-->",a)

// function abc(){
//     let a = 10
//     a = a + 8
//     // console.log(a) 
//     return a
// }
// const b = abc()
// console.log(b)

function sumTwo(a,b) //(pass two parameter in sum function )
{
    const c = a + b
    return c
}
const d = sumTwo(8,9)  // pass two argument under sum function 
console.log(d)
const e=sumTwo(12,37)
console.log(e)
console.log(sumTwo(60,12,10))  // it print NaN.(because,60+undefined=NaN)
// when pass more than input , it apply only how many parameter is use in function

function sumThree(a,b,c){
     return a+b+c
}
console.log(sumThree(87,13,50))

// when we need n number of input use Rest = ...n
// apply for loop on n to add numbers and return sum

function fun(...n){
    let sum=0
    for(let i of n){
        sum=sum+i
    }
    return sum
}
console.log(fun(12,11,27,30,60))


function mulOne(a,b,c){
    if(a===0 || b===0 || c===0){
        return 0
    }
    return (a||1) * (b||1) * (c||1)
}
console.log(mulOne(87,65,92))
console.log(mulOne(6,5,"k"))
console.log(mulOne(25,25))

function mulTwo(a,b,c){
   if(typeof a !== "number"){
       a=1
   }
   if(typeof b !== "number"){
       b=1
   }
   if(typeof c !== "number"){
       c=1
   }
   return a * b * c
}
const h=mulTwo(5,6,0)
console.log(h)


// Normal Function

function demo(a){
    const result = a+100
    return result 
}
console.log(demo(61))

// arrow function (when a fuction is one line syntax when body is one line)

const l = b => b+100  // after arrow automatically return
console.log(l(50))


const m = c => {
    const result = c+100
    return result 
}
console.log(m(20))

//  input as a fuction and return as a function

function demo1(q){
    return q()
}
function cal(){
    return 2
}

const v = demo1(cal)
console.log(v)
console.log(cal)

function foo(s){
    return s
}
function bar(){
    return 5
}

const t=foo(bar)
console.log(t)


// Map is higher function

const array1=[1,4,9,16]
// const u = array1.push(17)
// console.log(u)

const u = array1.map(x => x * 2)
const w=array1.map(x=> x+5)
console.log(u)
console.log(array1)
console.log(w)

// Filter

const arr2=[1,5,9,16,18,19,24,27]
const ap=[1,7,9,11]
const fil = arr2.filter(x => x%2 === 0)
const fil2 = ap.filter(x => x%2 === 0)
console.log(fil)
console.log(fil2)

// find

const arr3=[1,5,9,10,19,28,27]
const arr4=[1,3,5,9,11]
const fin1= arr4.find(x => x%2 === 0)
const fin2 = arr3.find(x => x%2 === 0)
console.log(fin1)
console.log(fin2)

// forEach

const arr5=[1,6,9,12,11]
const result1=arr5.forEach(x => console.log(x))
console.log(result1)

let result4=0
function sum2(x){
    result4=result4+x
}
const output = arr5.forEach(sum2)
console.log(result4)


// Mutable method:-Push(),pop(),shift(),unshift() methods
// Immutable method:-map(),filter(),find(),forEach(),reduce(),findIndex()


const arr6=[1,5,10,17,19,20,25]

const result5 = arr6
                    .filter(x=>x%2===0)
                    .map(x=>x+5)
                    .find(x=>x>20)
console.log(result5)   // This three function are immutable.


const result6 = arr6.filter(x => x%2 === 0)
                    .concat(21)
                    .find(x => x>20)
console.log(result6) 


const result7 = arr6.filter(x => x%2 === 0)
                    .map(x => x+21)
                    .forEach(x =>{
                        if(x>33){
                            console.log(x)
                        }
                    })
