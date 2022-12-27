// for( let i = 1; i < 11; i++ ){
//    console.log(i)
// }

// const testData=[1,10,15,20]
// for( let i=0; i<4; i++){
//     console.log(testData[i])
//     if(testData[i]===15){
//         break;
//     }
// }

// const testData=[1,10,15,20,25,30,35,40,50]
// for (let i in testData) {
//     console.log(i);        // 0,1,2....,8(indexing)
// }
// for (let i of testData) {    
//     console.log(i);         // 1,10,15,....,50(value)
// }

let demoData = {
    "1":5,
    "2":6,
    "3":7,
    "4":8
}

for (let i in demoData) {
    console.log("keys:-",i);
}

for (let i of Object.keys(demoData)) {
    console.log("values:-",(demoData[i]));
}

// for( let i = 0; i < 8; i++ ){
//     if(testData[i]===10){
//         continue;
//     }
//     console.log(testData[i])
    
//     if(testData[i] === 30){
//         break;
//     }
    
    
// }