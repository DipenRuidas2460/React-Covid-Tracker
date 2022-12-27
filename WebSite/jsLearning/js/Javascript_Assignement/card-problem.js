const cardData = [
    {
        suit: "heart",
        value: 7,
    },
    {
        suit: "club",
        value: 8,
    },
    {
        suit: "club",
        value: 2,
    },
    {
        suit: "diamond",
        value: 2,
    },
    {
        suit: "diamond",
        value: 5,
    },
    {
        suit: "club",
        value: 10,
    },
];

// // =========================================== 1 ==================================================== //


// function findCard(value, suit) {
//     if(value === 2 || value === 8 || value === 10 && suit === "club"){
//         return true
//     }
//     else if(value === 2 || value === 5 && suit === "diamond"){
//         return true
//     }
//     else if(value === 7 && suit === "heart"){
//         return true
//     }
//     else{
//         return false
//     }

// }

// console.log(findCard(10,"club"))  //true
// console.log(findCard(5,"heart"))  //false

// /** * 1. complete the above function,
//  * it should return true /false if card is present/absent
//  * example
//  * findCard(5, 'heart') should return false
//  * findCard(10, 'club') should return true
// */

// // =============================================== 2 ================================================ //


// function getSuits(cardData) { 
//     const arr = []
//     const k = Object.values(cardData[0])[0]
//     console.log(k)
//     const m= Object.values(cardData[1])[0]
//     const n= Object.values(cardData[3])[0]
//     arr.splice(0,3,k,m,n)
//     return arr
// }
// const d = getSuits(cardData)
// console.log(d)



/**
    2. write a function which returns the list of available suits in the above data
 * ans => ["heart", "club", "diamond"]
*/


// ================================================ 3 =============================================== //


function getSuitCount(cardData) {
    const obj = {}
    cardData.forEach((element,Index) => {
        obj[element] = Object.values(cardData[Index])
    });
    return obj
}
const p = getSuitCount(cardData)
console.log(p)
/**
 * 3. write a function which returns an object with the suits as its key and its total count as its value
 * ans => {  heart:1,  club:3, diamond:2,}
*/

// ================================================= 4 ============================================== //

function getSuitValues(cardData) {
    
}

/** 
 *  4. write a function which returns an object with the suits as its key and its available values as value
 *  ans => { heart:[7], club:[8,2,10], diamond:[2,5]} 
 *   
*/




