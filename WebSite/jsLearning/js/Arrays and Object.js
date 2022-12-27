console.log("We are in Arrays and object.js file.");
let marks = [34,23,24,93,73,25];
const fruit = ['Orange','Apple','Pineapple'];
const mixed = ['str',89,[3,5]];
const arr = new Array(23,123,21,'Orange');
console.log(arr);
console.log(mixed);
console.log(fruit[1]);
console.log(arr.length);
console.log(Array.isArray(arr));
arr[0] = 'Dipen';
console.log(arr);
let value = marks.indexOf(34);
console.log(value);
// Mutating and Modifying arrays.
marks.unshift(1009);
console.log(marks);
marks.pop();
console.log(marks);
marks.shift();
console.log(marks);
marks.splice(1, 2);
console.log(marks);
marks.reverse();
console.log(marks);
let marks2 = [1,2,3,7];
marks=marks.concat(marks2);
console.log(marks);
let myObj = {
    'name':'Dipen',
    channel:'Disney',
    isActive:true,
    marks:[1,5,6,8]
};
console.log(myObj);
console.log(myObj['channel']);
console.log(myObj.isActive);
