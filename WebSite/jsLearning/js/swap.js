// function swapNumber() {
//     let a = 10
//     let b = 5
//     console.log("Before swapping:-","a:-",a,"----","b:-",b);
//     a = a + b
//     b = a - b
//     a = a - b 
//     console.log("After Swapping:-","a:-",a,"----","b:-",b);
// }

// swapNumber()

// function swapStrings() {
//     let x = "Something"
//     let y = "Good"
//     console.log("Before swapping:-","x:-",x,"----","y:-",y);
//     x = x.concat(y)
//     y = x.slice(0,y.length+5)
//     x = x.slice(y.length)
//     console.log("After Swapping:-","x:-",x,"----","y:-",y);
// }
// swapStrings()


// function foo1() {
//     return {bar:"hello"}
// }

// function foo2() {
//     return {bar:"hello"}
// }

// console.log(foo1());
// console.log(foo2());


// function p() {
//     console.log(a);
//     var a = 10
// }

// p()


// var obj = {
//     message:"Hello",
//     innerMessage:function(){
//         return this.message;
//     }
// }

// console.log(obj.innerMessage());


// let a = "Dipen"
// // Rest Operator(Destructor method)
// let [v, m, ...j] = [1, 2, 3, 4, 5, 6]
// console.log(m);
// console.log(j);
// // Spread operator
// let b = console.log(...a);

// let a = 3
// let b = new Number(3);
// let c = 3
// console.log(typeof(b));
// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }


// function Sum(name, ...arg) {
//     let sum = 0
//     for(let i in arg){
//         sum += arg[i]
//     }
//     console.log("Sum:- ", sum);
//     console.log("name:- ", name);
// }

// Sum("Dipen",50,60,70)







// let Sum = (name, ...b)=>{
//     let sum = 0
//     for(let i in b){
//         sum += b[i] 
//     }
//     console.log(sum);
//     console.log(name);
// }

// Sum("Dipen",20,3)

// let a = "Dipen"
// let b = [...a]
// console.log(b);
