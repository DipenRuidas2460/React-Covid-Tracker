// type conversion and type coercion
console.log("Welcome to Type conversion.");
let myVar;
myVar=String(34);
console.log(myVar, (typeof myVar));
let booleanVar=String(true);
console.log(booleanVar, (typeof booleanVar));
let arr1=String([1,2,3,4,5]);
console.log(arr1.length, (typeof arr1));
let arr=([1,2,3,4,5]);
console.log(arr.length, (typeof arr));
let i =78;
console.log(i.toString(), (typeof i));
console.log(i, (typeof i));
let v=new Date();
console.log(v.toString());
let stri = Number("3434");
console.log(stri, (typeof stri));
stri=Number("343d4");
console.log(stri, (typeof stri));
stri=Number(true);
console.log(stri, (typeof stri));
stri=Number(false);
console.log(stri, (typeof stri));
let num=parseInt("52.098");
console.log(num, (typeof num))
let num1=parseFloat("35.654");
console.log(num1, (typeof num1));
console.log(num1.toFixed(5), (typeof num1));

// type coercion
mystr="698";
mynum=65;
console.log(mystr + mynum);
mystr=Number("698");
console.log(mystr + mynum);
